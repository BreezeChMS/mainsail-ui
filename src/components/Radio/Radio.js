import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Radio.scss";

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
            className={clsx("mainsail-radio", className)}
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
                <span className={clsx("mainsail-radio__icon", color)}>
                    <span className="circle"></span>
                </span>
                {text ? (
                    <span
                        className={clsx(
                            "mainsail-radio__label-text",
                            isTruncated && "truncated"
                        )}>
                        {text}
                    </span>
                ) : null}
                {children}
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

export const RadioGroup = ({ children, className, labelText }) => {
    return (
        <div className={clsx("mainsail-radiogroup", className)}>
            {labelText ? (
                <label className="radiogroup-label">{labelText}</label>
            ) : null}
            {children}
        </div>
    );
};

RadioGroup.propTypes = {
    /** Optional Label text to display, can also optionally provide children */
    labelText: PropTypes.string,
    /** Style class to add to RadioGroup label wrapper element */
    className: PropTypes.string,
};
