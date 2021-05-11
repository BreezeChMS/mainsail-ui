import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { convertFromResponsiveArray } from "utility/responsive";

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
    headerClassName, // eslint-disable-line no-unused-vars
    className,
    field,
    shouldTruncate,
    align,
    minWidth,
    maxWidth,
    width,
    children,
}) => {
    let styles = {
        flexBasis: width && convertFromResponsiveArray(breakpoint, width),
        flexGrow: width ? 0 : 1,
        flexShrink: width ? 0 : 1,
        minWidth: minWidth && convertFromResponsiveArray(breakpoint, minWidth),
        maxWidth: maxWidth && convertFromResponsiveArray(breakpoint, maxWidth),
    };

    return (
        <div
            role="cell"
            data-id={`${field}-column`}
            style={styles}
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
    // breakpoint: PropTypes.object,
    /** Whether the column is sortable or not */
    isSortable: PropTypes.bool,
    /** Whether the column should truncate data with ellipsis when overflowing */
    shouldTruncate: PropTypes.bool,
    /** Horizontal alignment of content within column */
    align: PropTypes.oneOf(Object.values(alignments)),
    /** Designate which field to pull data from if desired */
    field: PropTypes.string,
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
