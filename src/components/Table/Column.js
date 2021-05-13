import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { generateColumnWidthStyle } from "utility/responsive";

import "./Table.scss";

const alignments = {
    left: "left",
    center: "center",
    right: "right",
};

/**
 * Subcomponent for Table that specifies a columnar piece of data and its surrounding context
 **/
export const Column = ({
    breakpoint, // eslint-disable-line react/prop-types
    getRowData, // eslint-disable-line react/prop-types
    headerClassName, // eslint-disable-line no-unused-vars
    className,
    field,
    rowId,
    shouldTruncate,
    align,
    minWidth,
    maxWidth,
    width,
    children,
}) => {
    let styles = generateColumnWidthStyle(breakpoint, {
        width,
        minWidth,
        maxWidth,
    });

    let columnChildren =
        typeof children === "function"
            ? children(getRowData()) // Provides row data access via "render-prop" usage
            : children;

    return (
        <div
            role="cell"
            data-testid={`${rowId}_${field}`}
            style={styles}
            className={classify("mainsail-table-column", align, className)}>
            {shouldTruncate ? (
                <span className="truncated">{columnChildren}</span>
            ) : (
                columnChildren
            )}
        </div>
    );
};

Column.propTypes = {
    /** Unique identifier to designate which row the data point belongs */
    rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Whether the column is sortable or not */
    isSortable: PropTypes.bool,
    /** Whether the column should truncate data with ellipsis when overflowing */
    shouldTruncate: PropTypes.bool,
    /** Horizontal alignment of content within column */
    align: PropTypes.oneOf(Object.values(alignments)),
    /** Designate which field to pull data from if desired */
    field: PropTypes.string,
    /** Specify another title for the column (overrides inferred field name) */
    label: PropTypes.string,
    /** Style class to add to component */
    className: PropTypes.string,
    /** Style class to add to column header */
    headerClassName: PropTypes.string,
    /** Excplicit Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    width: PropTypes.any,
    /** Minimum Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    minWidth: PropTypes.any,
    /** Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    maxWidth: PropTypes.any,
};

Column.defaultProps = {
    isSortable: false,
    align: alignments.left,
};

Column.displayName = "Column";

Column.alignments = alignments;
