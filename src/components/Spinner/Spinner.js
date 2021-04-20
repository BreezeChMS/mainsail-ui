import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Spinner.scss";

export const colors = {
    default: "default",
    dark: "dark",
    light: "light",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
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
            className={classify(className, "spinner", color)}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
};

Spinner.propTypes = {
    /** Style class to add to Spinner */
    className: PropTypes.string,
    /** Color tint of spinner */
    color: PropTypes.oneOf(Object.keys(colors)),
};

Spinner.defaultProps = {
    color: colors.default,
};

Spinner.colors = colors;
