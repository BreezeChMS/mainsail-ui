import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { names, colors, Icon } from "components/Icon";

/**
 * An icon that displays in a Form Input (for use as a child of FormControl)
 **/
export const FormInputIcon = ({ className, isDisabled, name, color }) => {
    return (
        <Icon
            isDisabled={isDisabled}
            color={color}
            className={classify("input-icon", className)}
            name={name}
        />
    );
};

FormInputIcon.propTypes = {
    /** Applies the disabled style  */
    isDisabled: PropTypes.bool,
    /** Color tint of icon to use */
    color: PropTypes.oneOf(Object.values(colors)),
    /** Name of icon to use */
    name: PropTypes.oneOf(Object.values(names)),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

FormInputIcon.defaultProps = {
    color: colors.dark,
    name: names.search,
};

FormInputIcon.displayName = "FormInputIcon";
FormInputIcon.colors = colors;
FormInputIcon.names = names;
