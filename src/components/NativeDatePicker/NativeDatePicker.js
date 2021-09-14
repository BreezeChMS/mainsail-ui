import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Icon } from "../Icon";

import "./NativeDatePicker.scss";

/**
 * Styles the default native/browser date input for a more consistent look (useful for Mobile)
 **/
export const NativeDatePicker = forwardRef(
    (
        {
            className,
            isDisabled,
            isReadOnly,
            isRequired,
            onChange,
            value,
            ...props
        },
        ref
    ) => {
        const [currentDate, setCurrentDate] = useState(value);

        const handleChange = (e) => {
            setCurrentDate(e.target.value);
        };

        const handleBlur = () => {
            return currentDate;
        };

        useEffect(() => {
            onChange && onChange(currentDate);
        }, [onChange, currentDate]);

        return (
            <div className={classify("mainsail-native-datepicker", className)}>
                <Icon color={Icon.colors.dark} name={Icon.names.calendar} />
                <input
                    ref={ref}
                    type="date"
                    data-testid="native-datepicker"
                    value={currentDate}
                    required={isRequired}
                    readOnly={isReadOnly}
                    disabled={isDisabled}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...props}
                />
            </div>
        );
    }
);

NativeDatePicker.propTypes = {
    /** Current value of date input in ISO8601 format */
    value: PropTypes.string,
    /** Disables input field */
    isDisabled: PropTypes.bool,
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Marks the form control as read only */
    isReadOnly: PropTypes.bool,
    /** (Optional) change handler returns date value in ISO8601 format */
    onChange: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

NativeDatePicker.defaultProps = {};
NativeDatePicker.displayName = "NativeDatePicker";
