import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Table.scss";

const aligments = {
    left: "left",
    center: "center",
    right: "right",
};

/**
 * Subcomponent for Table that specifies a columnar piece of data and its surrounding context
 **/
export const Column = ({ className, field, align, children, ...props }) => {
    return (
        <div
            data-id={`${field}-column`}
            className={classify("mainsail-table-column", align, className)}
            {...props}>
            {children}
        </div>
    );
};

Column.propTypes = {
    /** Horizontal alignment of content within column */
    align: PropTypes.oneOf(Object.values(aligments)),
    /** Designate which field to pull data from if desired */
    field: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Column.defaultProps = {};

Column.displayName = "Column";

Column.aligments = aligments;
