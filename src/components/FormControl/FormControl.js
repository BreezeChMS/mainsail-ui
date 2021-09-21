import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { useUniqueId } from "utility/hooks";
import { isFragment } from "react-is";

/**
 *  This function cascades props down to immediate children for styling and functionality controlled by FormControl
 */
const getPropsByChildType = ({ child, allChildNames, ...parentProps }) => {
    switch (child.type.displayName) {
        case "Input":
        case "Textarea":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error",
                    allChildNames.includes("FormInputIcon") && "with-icon"
                ),
                id: child.props.id || parentProps.inputId,
                isReadOnly: parentProps.isReadOnly || child.props.isReadOnly,
                isDisabled: parentProps.isDisabled || child.props.isDisabled,
                isRequired: parentProps.isRequired || child.props.isRequired,
                "aria-describedby": parentProps.isInvalid
                    ? parentProps.invalidTextId
                    : parentProps.helpTextId,
            };
        case "Dropdown":
        case "TimePicker":
        case "NativeDatePicker":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error"
                ),
                id: child.props.id || parentProps.inputId,
                isDisabled: parentProps.isDisabled || child.props.isDisabled,
                isRequired: parentProps.isRequired || child.props.isRequired,
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
                htmlFor: child.props.htmlFor || parentProps.inputId,
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
                isDisabled: parentProps.isDisabled || child.props.isDisabled,
            };
        case "FormInputIcon":
            return {
                className: classify(child.props.className),
                isDisabled: parentProps.isDisabled || child.props.isDisabled,
            };

        case "CheckboxGroup":
        case "RadioGroup":
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error",
                    parentProps.isDisabled && "disabled"
                ),
                isDisabled: parentProps.isDisabled || child.props.isDisabled,
                isRequired: parentProps.isRequired || child.props.isRequired,
            };

        default:
            /**
             * If we don't get an expected displayName, we can assume the child is not mainsail,
             * so only pass native props, (eg. disabled/required etc)
             */
            return {
                className: classify(
                    child.props.className,
                    parentProps.isInvalid && "error"
                ),
                id: child.props.id || parentProps.inputId,
                disabled: parentProps.isDisabled || child.props.isDisabled,
                required: parentProps.isRequired || child.props.isRequired,
                "aria-describedby": parentProps.isInvalid
                    ? parentProps.invalidTextId
                    : parentProps.helpTextId,
            };
    }
};

/**
 * Wrapper for form elements that provides context to children such as isInvalid, isDisabled, isRequired, and extra options such as helpText and fieldOptions
 **/
export const FormControl = ({
    className,
    children,
    colSpan,
    isReadOnly,
    isRequired,
    isDisabled,
    isInvalid,
    invalidText,
    ...props
}) => {
    const autoId = useUniqueId("input-");
    const helpTextId = `helpfor-${autoId}`;
    const invalidTextId = `errorfor-${autoId}`;
    const childrenArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);
    const childNames = [];
    childrenArray.reduce((arr, cur) => {
        if (cur.type.displayName) return childNames.push(cur.type.displayName);
    }, childNames);

    // attach props by child type
    let formChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            ...getPropsByChildType({
                child,
                allChildNames: childNames,
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

    const getRowColSpanClass = (type, counts) => {
        if (Array.isArray(counts)) {
            return classify({
                [`sm:col-span-${counts[0]}`]: counts[0],
                [`md:col-span-${counts[1]}`]: counts[1],
                [`lg:col-span-${counts[2]}`]: counts[2],
            });
        }
        return `sm:col-span-${counts}`;
    };

    return (
        <div
            className={classify(
                "mainsail-form-control",
                className,
                colSpan === "auto"
                    ? `col-span-auto`
                    : getRowColSpanClass("col", colSpan)
            )}
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
    /** AutoGrid compatible Column span for item (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg] Note: Must be nested in an `<AutoGrid/>`*/
    colSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Defines the id bound to the input and attaches label  */
    id: PropTypes.string,
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
    isReadOnly: false,
    colSpan: "auto",
};
