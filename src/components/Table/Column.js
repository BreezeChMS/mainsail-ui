import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Table.scss";

/**
 * Display data in a table-like styled grid
 **/
export const Column = ({ className, field, children, ...props }) => {
    return (
        <div
            data-id={`${field}-column`}
            className={classify("mainsail-table-column", className)}
            {...props}>
            {children}
        </div>
    );
};

Column.propTypes = {
    /** Designate which field to pull data from if desired */
    field: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Column.defaultProps = {};

Column.displayName = "Column";

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * Column.variants = variants
 */
