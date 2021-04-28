import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Input.scss";

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {};

/**
 * A text field for user input - For use as subcomponent of **FormControl**
 **/
export const Input = ({
    className,
    type,
    placeholder,
    value,
    onFocus,
    onBlur,
    isDisabled,
    isReadOnly,
    isRequired,
    ...props
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            required={isRequired}
            readOnly={isReadOnly}
            disabled={isDisabled}
            className={classify("mainsail-input", className)}
            {...props}
        />
    );
};

Input.propTypes = {
    /** Disables input field */
    isDisabled: PropTypes.bool,
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Marks the form control as read only */
    isReadOnly: PropTypes.bool,
    /** Defines the type of the input field (native type prop)*/
    type: PropTypes.string,
    /** Defines the value of the input field (if controlled) */
    value: PropTypes.string,
    /** (Optional) placeholder text for input */
    placeholder: PropTypes.string,
    /** (Optional) callback handler to fire when input loses focus */
    onBlur: PropTypes.func,
    /** (Optional) callback handler to fire when input receives focus */
    onFocus: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
};

Input.displayName = "Input";
