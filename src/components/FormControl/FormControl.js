import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { useUniqueId } from "utility/hooks";
import { isFragment } from "react-is";

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

/**
 *  This function cascades props down to immediate children for styling and functionality controlled by FormControl
 */
const getPropsByChildType = ({ child, ...parentProps }) => {
    if (!child.type.displayName) {
        console.warn(
            `Child passed to <FormControl/> does not have assigned displayName`,
            child
        );
    }

    switch (child.type.displayName) {
        case "Input":
        case "Textarea":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error"
                ),
                id: child.props.id || parentProps.inputId,
                isReadOnly: parentProps.isReadOnly,
                isDisabled: parentProps.isDisabled,
                isRequired: parentProps.isRequired,
                "aria-describedby": parentProps.isInvalid
                    ? parentProps.invalidTextId
                    : parentProps.helpTextId,
            };

        case "FormLabel":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error",
                    parentProps.isDisabled && "disabled"
                ),
                htmlFor: child.props.id || parentProps.inputId,
                isRequired: parentProps.isRequired,
            };

        case "FormHelpText":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isDisabled && "disabled"
                ),
                id: parentProps.helpTextId,
                isHidden: parentProps.isInvalid ? true : false,
            };

        case "FormInputOptions":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error",
                    parentProps.isDisabled && "disabled"
                ),
                width: parentProps.width,
                isDisabled: parentProps.isDisabled,
            };

        default:
            console.warn(
                `Child component ${child.type.displayName} passed to <FormControl/> did not receive props`
            );
    }

    return child;
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
    ...props
}) => {
    const autoId = useUniqueId("");
    const helpTextId = `helpfor-${autoId}`;
    const invalidTextId = `errorfor-${autoId}`;
    const childrenArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    // attach props by child type
    let formChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            ...getPropsByChildType({
                child,
                width,
                inputId: props.id || autoId,
                helpTextId,
                invalidTextId,
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
            {isInvalid && (
                <div className="invalid-text" id={invalidTextId}>
                    {invalidText}
                </div>
            )}
        </div>
    );
};

FormControl.propTypes = {
    /** Defines the id bound to the input and attaches label  */
    id: PropTypes.string,
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
