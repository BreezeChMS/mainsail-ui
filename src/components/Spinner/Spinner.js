import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Spinner.scss";

export const colors = {
    default: "default",
    dark: "dark",
    light: "light",
};

export const ENUMS = {
    colors,
};

/**
 * A loading indicator for various uses.
 **/

export const Spinner = ({ className, color }) => {
    return (
        <div
            data-testid="spinner"
            className={clsx(className, "spinner", color)}>
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    );
};

Spinner.propTypes = {
    /** Color tint of spinner */
    color: PropTypes.oneOf(Object.keys(colors)),
};

Spinner.defaultProps = {
    color: colors.default,
};
