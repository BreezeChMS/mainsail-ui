import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Table.scss";

/**
 * Define and export enumerable prop values for use (then attach to component below)
 * e.g. export const colors = {
 *    color1: "color1"
 * }
 */

/**
 * Display data in a table-like styled grid
 **/
export const Actions = ({ className, children, ...props }) => {
    return (
        <div className={classify("mainsail-row-actions", className)} {...props}>
            {children}
        </div>
    );
};

Actions.propTypes = {
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Actions.defaultProps = {};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * Actions.variants = variants
 */
