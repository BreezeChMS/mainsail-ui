import React, { useEffect, useRef, cloneElement, Children } from "react";
import { isFragment } from "react-is";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import CheckIcon from "components/Icons/Check";

import "./Checkbox.scss";

export const colors = {
    blue: "blue",
    green: "green",
    violet: "violet",
    orange: "orange",
    pink: "pink",
    red: "red",
    neutral: "neutral",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    colors,
};

/**
 * An on/off, multiple choice selection input for `AND` options
 *
 * This component is stateless and intended to have state mangaged externally
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
    /*
     * The input needs to be programmatically set to indeterminate
     * we will use useEffect to do this on a ref to respond to
     * user-interacted state changes
     */
    useEffect(() => {
        checkboxRef.current.checked = isChecked || isDefaultChecked;
        checkboxRef.current.indeterminate = isIndeterminate;
    });

    return (
        <label
            className={classify("mainsail-checkbox", className)}
            data-testid="checkbox">
            <span className="mainsail-checkbox__input-wrapper">
                <input
                    className="mainsail-checkbox__input"
                    type="checkbox"
                    onChange={onChange}
                    readOnly={typeof onChange !== "function"}
                    checked={isChecked}
                    defaultChecked={isDefaultChecked}
                    disabled={isDisabled}
                    ref={checkboxRef}
                    {...props}
                />
                <span className={classify("mainsail-checkbox__icon", color)}>
                    {isIndeterminate && !isChecked ? (
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="none"
                            data-testid="indeterminate-svg"
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

                    {!isIndeterminate ? (
                        <CheckIcon data-testid="check-svg" />
                    ) : null}
                </span>
                {text || children ? (
                    <span
                        className={classify(
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
    /** Label text to display, can also optionally provide children */
    text: PropTypes.string,
    /** Checkbox color (omit for default) */
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

export const CheckboxGroup = ({
    children,
    isDisabled,
    className,
    labelText,
    ...props
}) => {
    /**
     * We may need to pass disabled/form context props
     */
    const childrenArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    let groupChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            isDisabled: isDisabled,
        });
    });

    return (
        <div
            className={classify("mainsail-checkboxgroup", className)}
            {...props}>
            {labelText ? (
                <label className="checkboxgroup-label">{labelText}</label>
            ) : null}
            {groupChildren}
        </div>
    );
};

CheckboxGroup.propTypes = {
    /** Marks entire group checkboxes as disabled */
    isDisabled: PropTypes.bool,
    /** (Optional) Label text to display, can also optionally provide children */
    labelText: PropTypes.string,
    /** Style class to add to CheckboxGroup label wrapper element */
    className: PropTypes.string,
};

Checkbox.colors = colors;
