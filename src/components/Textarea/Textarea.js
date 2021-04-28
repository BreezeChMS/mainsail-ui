import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Textarea.scss";

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {};

/**
 * A multi-line text input - Use as a subcomponent of **FormControl** (any native props not shown are passed through)
 **/
export const Textarea = ({
    className,
    children,
    isDisabled,
    isReadOnly,
    isRequired,
    ...props
}) => {
    return (
        <textarea
            required={isRequired}
            readOnly={isReadOnly}
            disabled={isDisabled}
            className={classify("mainsail-textarea", className)}
            {...props}>
            {children}
        </textarea>
    );
};

Textarea.propTypes = {
    /** Disables input field */
    isDisabled: PropTypes.bool,
    /** Marks the form control as required */
    isRequired: PropTypes.bool,
    /** Marks the form control as read only */
    isReadOnly: PropTypes.bool,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Textarea.defaultProps = {};

Textarea.displayName = "Textarea";
