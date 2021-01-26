import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";
import { Spinner } from "../Spinner";
import clsx from "clsx";

import "./Button.scss";

const renderIcon = (i, side) => {
    if (typeof i === "string") {
        return <Icon name={i} className={clsx(side)} />;
    }
    return i;
};

export const ENUMS = {
    variants: {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        link: "link",
        icon: "icon",
    },
    textSizes: {
        small: "small",
        regular: "regular",
    },
};

/**
 * An epic, clickable button that does things!
 **/
export const Button = ({
    text,
    children,
    textSize,
    variant,
    className,
    iconLeft,
    iconRight,
    loading,
    loadingText,
    icon,
    ...props
}) => {
    if (loading) {
        return (
            <button
                className={clsx(
                    { loading },
                    "mainsail-button",
                    className,
                    variant,
                    textSize
                )}
                {...props}>
                <Spinner />
                {loadingText ? <span>{loadingText}</span> : null}
                {children}
            </button>
        );
    }

    return (
        <button
            className={clsx("mainsail-button", className, variant, textSize)}
            {...props}>
            {iconLeft ? renderIcon(iconLeft, "left") : null}
            {!icon ? <span>{text}</span> : null}
            {icon ? renderIcon(icon) : null}
            {children}
            {iconRight ? renderIcon(iconRight, "right") : null}
        </button>
    );
};

Button.propTypes = {
    /** What style of button to use: */
    variant: PropTypes.oneOf(Object.keys(ENUMS.variants)),
    /** Button text to display */
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
    disabled: PropTypes.bool,
    /** Loading state */
    loading: PropTypes.bool,
    /** Loading state */
    loadingText: PropTypes.string,
};

Button.defaultProps = {
    variant: ENUMS.variants.primary,
    textSize: ENUMS.textSizes.regular,
};
