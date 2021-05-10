import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { convertFromResponsiveArray } from "utility/responsive";

import "./Table.scss";

const alignments = {
    left: "left",
    centered: "centered",
    right: "right",
};

/**
 * Subcomponent for Table that specifies a columnar piece of data and its surrounding context
 **/
export const Column = ({
    breakpoint, // eslint-disable-line react/prop-types
    className,
    field,
    shouldTruncate,
    align,
    minWidth,
    maxWidth,
    children,
}) => {
    return (
        <div
            role="cell"
            data-id={`${field}-column`}
            style={{
                minWidth: convertFromResponsiveArray(breakpoint, minWidth),
                maxWidth: convertFromResponsiveArray(breakpoint, maxWidth),
            }}
            className={classify("mainsail-table-column", align, className)}>
            {shouldTruncate ? (
                <span className="truncated">{children}</span>
            ) : (
                children
            )}
        </div>
    );
};

Column.propTypes = {
    /** Whether the column is sortable or not */
    isSortable: PropTypes.bool,
    /** Whether the column should truncate data with ellipsis when overflowing */
    shouldTruncate: PropTypes.bool,
    /** Horizontal alignment of content within column */
    align: PropTypes.oneOf(Object.values(alignments)),
    /** Designate which field to pull data from if desired */
    field: PropTypes.string,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Minimum Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    minWidth: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
    /** Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    maxWidth: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
};

Column.defaultProps = {
    isSortable: false,
    align: alignments.left,
};

Column.displayName = "Column";

Column.alignments = alignments;
