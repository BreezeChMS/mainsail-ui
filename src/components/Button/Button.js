import React from "react";
import PropTypes from "prop-types";
import { Icon, names } from "../Icon/Icon";
import clsx from "clsx";

import "./Button.scss";

const renderIcon = (i, side) => {
    if (typeof i === "string") {
        return <Icon name={i} className={clsx(side)} />;
    }
    return i;
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
    icon,
    ...props
}) => {
    return (
        <button
            className={clsx("mainsail-button", className, variant, textSize)}
            {...props}>
            {iconLeft ? renderIcon(iconLeft, "left") : null}
            {!icon ? text : null}
            {icon ? renderIcon(icon) : null}
            {children}
            {iconRight ? renderIcon(iconRight, "right") : null}
        </button>
    );
};

Button.propTypes = {
    /** What style of button to use: */
    variant: PropTypes.oneOf(Object.keys(variants)),
    /** Button text to display */
    text: PropTypes.string,
    /** Button text size */
    textSize: PropTypes.oneOf(Object.keys(textSizes)),
    /** Display an Icon on the left side of text */
    iconLeft: PropTypes.oneOf(Object.keys(names)),
    /** Display an Icon on the right side of text */
    iconRight: PropTypes.oneOf(Object.keys(names)),
    /** Make an icon only button */
    icon: PropTypes.oneOf(Object.keys(names)),
    /** Style class to add to button element */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: variants.primary,
    textSize: textSizes.regular,
};
