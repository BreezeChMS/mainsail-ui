import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

/**
 * Define and export enumerable prop values for use (then attach to component below)
 * e.g. export const colors = {
 *    color1: "color1"
 * }
 */

/**
 * A line of helpful text to aid users when filling out form fields
 **/
export const FormHelpText = ({
    className,
    text,
    isHidden,
    children,
    ...props
}) => {
    if (isHidden) {
        return null;
    }
    return (
        <div className={classify("mainsail-help-text", className)} {...props}>
            {text}
            {children}
        </div>
    );
};

FormHelpText.propTypes = {
    /** (Optional) Control for mounting of the help text */
    isHidden: PropTypes.bool,
    /** (Optional) alternative to providing children */
    text: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

FormHelpText.defaultProps = {};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * FormHelpText.variants = variants
 */

FormHelpText.displayName = "FormHelpText";
