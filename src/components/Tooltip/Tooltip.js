import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Tooltip.scss";

export const ENUMS = {
    // Add any prop enums here (see Icon.js for example)
};

/**
 * A wrapper for a component that provides a Popperjs-driven tooltip
 **/
export const Tooltip = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={classify('mainsail-tooltip', className)} {...props}>{children}</div>
    );
};

Tooltip.propTypes = {
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
};

Tooltip.defaultProps = {};

/*
* Tip: Be sure to attach any prop enums separately for convenience
* use the plural form of the prop name
* Tooltip.variants = variants
*/
