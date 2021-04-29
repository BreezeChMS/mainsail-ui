import React, { cloneElement, Children } from "react";
import { isFragment } from "react-is";
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
    isDisabled,
    width,
    ...props
}) => {
    if (isHidden) {
        return null;
    }

    /**
     * We may need to pass disabled/form context props
     */
    const childrenArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    let optionChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            isDisabled: isDisabled,
        });
    });

    return (
        <div
            className={classify("mainsail-input-options", className, width)}
            {...props}>
            {optionChildren}
        </div>
    );
};

FormInputOptions.propTypes = {
    /** Disabled state (set automatically if nested in FormControl) */
    isDisabled: PropTypes.bool,
    /** Defines the width of the input field parent element (set automatically if nested in FormControl) */
    width: PropTypes.oneOf(Object.values(widths)),
    /** (Optional) Control for mounting of the options */
    isHidden: PropTypes.bool,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

FormInputOptions.defaultProps = {
    width: widths.md,
};

FormInputOptions.widths = widths;
FormInputOptions.displayName = "FormInputOptions";
