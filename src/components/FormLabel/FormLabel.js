import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./FormLabel.scss";

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {};

/**
 * A standard label to complement a form input - Use as a subcomponent of **FormControl**
 **/
export const FormLabel = ({
    className,
    isRequired,
    htmlFor,
    text,
    children,
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classify("mainsail-form-label", className)}>
            {text}
            {children}
            {isRequired && (
                <span
                    role="presentation"
                    aria-hidden="true"
                    className="required-mark">
                    *
                </span>
            )}
        </label>
    );
};

FormLabel.propTypes = {
    /** Specifies the id of the form element the label should be bound to  */
    htmlFor: PropTypes.string,
    /** Label text (simpler alternative to using children) */
    text: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Marks a label as required for an input */
    isRequired: PropTypes.bool,
};

FormLabel.defaultProps = {};

FormLabel.displayName = "FormLabel";
