import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./FormInputOptions.scss";

export const widths = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
};

/**
 * Define and export enumerable prop values for use (then attach to component below)
 * e.g. export const colors = {
 *    color1: "color1"
 * }
 */

/**
 * Attach input field options to a form control
 **/
export const FormInputOptions = ({
    className,
    isHidden,
    children,
    width,
    ...props
}) => {
    if (isHidden) {
        return null;
    }

    return (
        <div
            className={classify("mainsail-input-options", className, width)}
            {...props}>
            {children}
        </div>
    );
};

FormInputOptions.propTypes = {
    /** Defines the width of the input field */
    width: PropTypes.oneOf(Object.values(widths)),
    /** Controls mounting of the options */
    isHidden: PropTypes.bool,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

FormInputOptions.defaultProps = {
    width: widths.md,
};

FormInputOptions.widths = widths;
FormInputOptions.displayName = "FormInputOptions";
