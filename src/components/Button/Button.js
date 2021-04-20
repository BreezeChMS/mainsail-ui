import React from "react";
import PropTypes from "prop-types";
import { Icon } from "components/Icon";
import { Spinner } from "components/Spinner";
import { classify } from "utility/classify";

import "./Button.scss";

const renderIcon = (i, side) => {
    if (typeof i === "string") {
        return <Icon name={i} className={classify(side)} />;
    }
    return i;
};

const renderChild = (child) => {
    if (typeof child === "string") {
        return <span>{child}</span>;
    }
    return child;
};

export const variants = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    link: "link",
    icon: "icon",
};

export const textSizes = {
    small: "small",
    regular: "regular",
};

export const intents = {
    default: "default",
    filtering: "filtering",
    danger: "danger",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    variants,
    textSizes,
    intents,
};

/**
 * A basic, interactive button with configurable options
 **/
export const Button = ({
    text,
    children,
    textSize,
    variant,
    className,
    iconLeft,
    iconRight,
    isLoading,
    loadingText,
    icon,
    isFullWidth,
    intent,
    isDisabled,
    ...props
}) => {
    if (isLoading) {
        return (
            <button
                data-loading={isLoading}
                disabled={isDisabled || isLoading}
                className={classify(
                    { loading: isLoading, disabled: isDisabled },
                    "mainsail-button",
                    className,
                    variant,
                    textSize
                )}
                {...props}>
                <Spinner />
                {loadingText ? renderChild(loadingText) : null}
                {children}
            </button>
        );
    }
    return (
        <button
            data-loading={isLoading}
            disabled={isDisabled || isLoading}
            className={classify(
                "mainsail-button",
                className,
                variant,
                textSize,
                intent,
                {
                    "text-small": textSize === "small",
                    "full-width": isFullWidth,
                }
            )}
            {...props}>
            {iconLeft ? renderIcon(iconLeft, "left") : null}
            {!icon ? renderChild(text) : null}
            {icon ? renderIcon(icon) : null}
            {children}
            {iconRight ? renderIcon(iconRight, "right") : null}
        </button>
    );
};

Button.propTypes = {
    /** Changes the overall style of button: */
    variant: PropTypes.oneOf(Object.keys(ENUMS.variants)),
    /** Modifies the color for different uses */
    intent: PropTypes.oneOf(Object.keys(ENUMS.intents)),
    /** Button text to display, can also optionally provide children. */
    text: PropTypes.string,
    /** Button text size */
    textSize: PropTypes.oneOf(Object.keys(ENUMS.textSizes)),
    /** Display an Icon on the left side of text */
    iconLeft: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.string,
    ]),
    /** Display an Icon on the right side of text */
    iconRight: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.string,
    ]),
    /** Make an icon only button */
    icon: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
        PropTypes.string,
    ]),
    /** Style class to add to button element */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Disabled state */
    isDisabled: PropTypes.bool,
    /** If true, will cause button to take up full width of parent */
    isFullWidth: PropTypes.bool,
    /** Loading state (adds/removes spinner) */
    isLoading: PropTypes.bool,
    /** Text to display while loading */
    loadingText: PropTypes.string,
};

Button.defaultProps = {
    variant: ENUMS.variants.primary,
    intent: ENUMS.intents.default,
    textSize: ENUMS.textSizes.regular,
};

Button.variants = variants;
Button.textSizes = textSizes;
Button.intents = intents;
