import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckIcon from "../Icons/Check";

import "./Checkbox.scss";

export const ENUMS = {
    colors: {
        blue: "blue",
        green: "green",
        violet: "violet",
        orange: "orange",
        pink: "pink",
        red: "red",
        neutral: "neutral",
    },
};

/**
 * An on/off, multiple choice selection input for `AND` options
 **/
export const Checkbox = ({
    className,
    onChange,
    color,
    text,
    isTruncated,
    children,
    isDefaultChecked,
    isChecked,
    isDisabled,
    ...props
}) => {
    return (
        <label
            className={clsx("mainsail-checkbox", className)}
            data-testid="checkbox">
            <span className="mainsail-checkbox__input-wrapper">
                <input
                    className="mainsail-checkbox__input"
                    type="checkbox"
                    onChange={onChange}
                    readOnly={typeof onChange !== "function"}
                    defaultChecked={isDefaultChecked}
                    checked={isChecked}
                    disabled={isDisabled}
                    {...props}
                />
                <span className={clsx("mainsail-checkbox__icon", color)}>
                    <CheckIcon />
                </span>
                {text || children ? (
                    <span
                        className={clsx(
                            "mainsail-checkbox__label-text",
                            isTruncated && "truncated"
                        )}>
                        {text}
                        {children}
                    </span>
                ) : null}
            </span>
        </label>
    );
};

Checkbox.propTypes = {
    /** (Optional) change event handler */
    onChange: PropTypes.func,
    /** Links Radio inputs together by a common field name */
    name: PropTypes.string,
    /** Label text to display, can also optionally provide children */
    text: PropTypes.string,
    /** Radio color (omit for default) */
    color: PropTypes.oneOf(Object.keys(ENUMS.colors)),
    /** Style class to add to radio label wrapper element */
    className: PropTypes.string,
    /** Truncates the text of the radio choice labels (driven by parent width) */
    isTruncated: PropTypes.bool,
    /** Initializes a radio selection as checked (uncontrolled component) */
    isDefaultChecked: PropTypes.bool,
    /** Controls a radio selection as checked */
    isChecked: PropTypes.bool,
    /** Controls a radio selection as checked */
    isDisabled: PropTypes.bool,
};

Checkbox.defaultProps = {
    isTruncated: false,
    color: ENUMS.colors.blue,
};

export const CheckboxGroup = ({ children, className, labelText, ...props }) => {
    return (
        <div className={clsx("mainsail-checkboxgroup", className)} {...props}>
            {labelText ? (
                <label className="checkboxgroup-label">{labelText}</label>
            ) : null}
            {children}
        </div>
    );
};

CheckboxGroup.propTypes = {
    /** Optional Label text to display, can also optionally provide children */
    labelText: PropTypes.string,
    /** Style class to add to CheckboxGroup label wrapper element */
    className: PropTypes.string,
};
