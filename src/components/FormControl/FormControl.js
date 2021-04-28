import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { useUniqueId } from "utility/hooks";

import "./FormControl.scss";

export const widths = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    widths,
};

const getPropsByChildType = ({ child, ...parentProps }) => {
    if (!child.type.displayName) {
        console.warn(
            `Child ${child} passed to <FormControl/> does not have assigned displayName`
        );
    }

    switch (child.type.displayName) {
        case "Input":
            return {
                id: parentProps.inputId,
                isReadOnly: parentProps.isReadOnly,
                isDisabled: parentProps.isDisabled,
                isRequired: parentProps.isRequired,
                "aria-describedby":
                    parentProps.helpText && parentProps.helpTextId,
            };
        case "FormLabel":
            return {
                htmlFor: parentProps.inputId,
                isRequired: parentProps.isRequired,
            };
    }

    return console.warn(`Unknown Child ${child} passed to <FormControl/>`);
};

/**
 * Wrapper for form elements that provides context to children such as isInvalid, isDisabled, isRequired, and extra options such as helpText and fieldOptions
 **/
export const FormControl = ({
    className,
    children,
    width,
    isReadOnly,
    isRequired,
    isDisabled,
    isInvalid,
    invalidText,
    helpText,
    ...props
}) => {
    const inputId = useUniqueId("input-");
    const helpTextId = `helpfor-${inputId}`;
    console.log(isRequired, inputId, isReadOnly);

    // attach props by child type
    let formChildren = Children.toArray(children).map((child) => {
        console.log("child:", child.type.displayName);

        return cloneElement(child, {
            ...child.props,
            ...getPropsByChildType({
                child,
                helpText,
                inputId,
                helpTextId,
                isReadOnly,
                isRequired,
                isDisabled,
                isInvalid,
            }),
        });
    });

    return (
        <div
            className={classify("mainsail-form-control", className, width)}
            disabled={isDisabled}
            {...props}>
            {formChildren}
            {helpText && (
                <div className="help-text" id={helpTextId}>
                    {helpText}
                </div>
            )}
            {isInvalid && <div className="invalid-text">{invalidText}</div>}
        </div>
    );
};

FormControl.propTypes = {
    /** Defines the id bound to the input and attaches label  */
    id: PropTypes.string,
    /** Defines the text to use as helper text below the input */
    helpText: PropTypes.string,
    /** Defines the width of the input field */
    width: PropTypes.oneOf(Object.values(widths)),
    /** Marks the form control as having an error */
    isInvalid: PropTypes.bool,
    /** Disables input field */
    isDisabled: PropTypes.bool,
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Marks the form control as read only */
    isReadOnly: PropTypes.bool,
    /** Text that indicates what went wrong with the field */
    invalidText: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

FormControl.defaultProps = {
    width: widths.md,
};

FormControl.widths = widths;