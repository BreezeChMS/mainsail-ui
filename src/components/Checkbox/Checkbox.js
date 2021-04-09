import React, { useRef, useState, useEffect } from "react";
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
    isIndeterminate,
    ...props
}) => {
    let checkboxRef = useRef();
    let checkedViaProps = isDefaultChecked || isChecked;
    let shouldBeCheckedState = checkedViaProps && !isIndeterminate;
    const stateFromProps = shouldBeCheckedState ? 1 : isIndeterminate ? -1 : 0;

    let [isCheckedState, setCheckedState] = useState(null);

    /*
     * The input needs to be programmatically set to indeterminate
     * we will use useEffect to do this on a ref to respond to
     * user-interacted state changes
     */
    useEffect(() => {
        checkboxRef.current.checked = isCheckedState === 1;
        checkboxRef.current.indeterminate = isCheckedState === -1;
    }, [isCheckedState]);

    /*
     * The Checkbox should build its state from props if passed
     */
    useEffect(() => {
        checkboxRef.current.checked = isCheckedState === 1;
        checkboxRef.current.indeterminate = isCheckedState === -1;
        setCheckedState(stateFromProps);
    }, [isIndeterminate, isChecked]);

    const handleOnChange = (e) => {
        setCheckedState(e.target.checked ? 1 : 0);
        onChange && onChange(e);
    };

    return (
        <label
            className={clsx("mainsail-checkbox", className)}
            data-testid="checkbox">
            <span className="mainsail-checkbox__input-wrapper">
                <input
                    className="mainsail-checkbox__input"
                    type="checkbox"
                    onChange={handleOnChange}
                    readOnly={typeof onChange !== "function"}
                    checked={isCheckedState === 1}
                    disabled={isDisabled}
                    ref={checkboxRef}
                    {...props}
                />
                <span className={clsx("mainsail-checkbox__icon", color)}>
                    {isIndeterminate && isCheckedState !== 1 ? (
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="3"
                                y="7"
                                width="10"
                                height="2"
                                fill="currentColor"
                            />
                        </svg>
                    ) : null}

                    {isCheckedState === 1 ? <CheckIcon /> : null}
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
    /** Style class to add to checkbox label wrapper element */
    className: PropTypes.string,
    /** Truncates the text of the checkbox choice labels (driven by parent width) */
    isTruncated: PropTypes.bool,
    /** Initializes a checkbox selection as checked (uncontrolled component) */
    isDefaultChecked: PropTypes.bool,
    /** Marks a checkbox selection as checked (controlled component) */
    isChecked: PropTypes.bool,
    /** Marks a checkbox selection as checked */
    isDisabled: PropTypes.bool,
    /** Marks a checkbox selection as indeterminate */
    isIndeterminate: PropTypes.bool,
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
