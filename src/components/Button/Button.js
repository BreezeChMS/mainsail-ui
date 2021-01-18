import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import clsx from "clsx";

import "./Button.scss";

const renderIcon = (i, side) => {
    if (typeof i === "string") {
        return <Icon name={i} className={side} />;
    }
    return i;
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
    ...props
}) => {
    return (
        <button
            className={clsx("mainsail-button", className, variant, textSize)}
            {...props}>
            {iconLeft ? renderIcon(iconLeft, "left") : null}
            {text}
            {children}
            {iconRight ? renderIcon(iconRight, "right") : null}
        </button>
    );
};

Button.propTypes = {
    /** What style of button to use: */
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "link"]),
    /** Button text to display */
    text: PropTypes.string,
    /** Button text size */
    textSize: PropTypes.oneOf(["small", "regular"]),
    /** Display an Icon on the left side of text */
    iconLeft: PropTypes.string,
    /** Display an Icon on the right side of text */
    iconRight: PropTypes.string,
    /** Style class to add to button element */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: "primary",
    textSize: "regular",
    iconRight: "",
    iconLeft: "",
};
