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
    isInline,
    isDisabled,
    id,
    ...props
}) => {
    return (
        <label
            id={id}
            className={clsx("mainsail-radio", className, isInline && "inline")}
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
    /** Label text to display, can also optionally provide children */
    text: PropTypes.string,
    /** Radio color (omit for default) */
    color: PropTypes.oneOf(Object.keys(ENUMS.colors)),
    /** Style class to add to radio label wrapper element */
    className: PropTypes.string,
    /** Truncates the text of the radio choice labels */
    isTruncated: PropTypes.bool,
    /** Initializes a radio selection as checked (uncontrolled component) */
    isDefaultChecked: PropTypes.bool,
    /** Controls a radio selection as checked */
    isChecked: PropTypes.bool,
    /** Controls a radio selection as checked */
    isDisabled: PropTypes.bool,
    /** Renders the checkboxes inline instead of stacked */
    isInline: PropTypes.bool,
    id: PropTypes.string,
};

Radio.defaultProps = {
    isTruncated: false,
    color: ENUMS.colors.blue,
};
