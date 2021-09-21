import React, { cloneElement, Children } from "react";
import { isFragment } from "react-is";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

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
 * A multiple choice selection
 **/
export const Radio = ({
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
            className={classify("mainsail-radio", className)}
            data-testid="radio">
            <span className="mainsail-radio__input-wrapper">
                <input
                    className="mainsail-radio__input"
                    type="radio"
                    onChange={onChange}
                    readOnly={typeof onChange !== "function"}
                    defaultChecked={isDefaultChecked}
                    checked={isChecked}
                    disabled={isDisabled}
                    {...props}
                />
                <span className={classify("mainsail-radio__icon", color)}>
                    <span className="circle"></span>
                </span>
                {text || children ? (
                    <span
                        className={classify(
                            "mainsail-radio__label-text",
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

Radio.propTypes = {
    /** (Optional) click handler */
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

Radio.defaultProps = {
    isTruncated: false,
    color: ENUMS.colors.blue,
};

export const RadioGroup = ({
    children,
    isDisabled,
    isRequired,
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
            className={classify("mainsail-radiogroup", className)}
            data-testid="radio-group"
            {...props}>
            {labelText ? (
                <label
                    className={classify(
                        "radiogroup-label",
                        isDisabled && "disabled"
                    )}>
                    {labelText}
                    {isRequired && (
                        <span
                            role="presentation"
                            aria-hidden="true"
                            className="required-mark">
                            *
                        </span>
                    )}
                </label>
            ) : null}
            {groupChildren}
        </div>
    );
};

RadioGroup.propTypes = {
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Marks entire group checkboxes as disabled */
    isDisabled: PropTypes.bool,
    /** (Optional) Label text to display, can also optionally provide children */
    labelText: PropTypes.string,
    /** Style class to add to RadioGroup label wrapper element */
    className: PropTypes.string,
};

Radio.displayName = "Radio";
RadioGroup.displayName = "RadioGroup";

Radio.colors = colors;
