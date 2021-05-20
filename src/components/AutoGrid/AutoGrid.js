import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./AutoGrid.scss";

export const flows = {
    row: "row",
    col: "col",
};

export const alignItems = {
    start: "start",
    center: "center",
    end: "end",
};

export const justifyItems = {
    spaceAround: "space-around",
    spaceBetween: "space-between",
    spaceEvenly: "space-evenly",
    start: "start",
    end: "end",
    center: "center",
};

export const gaps = [0, 4, 8, 10, 12, 15, 16, 20, 30, 48];

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    flows,
};

const getRowColsClass = (type, counts) => {
    if (Array.isArray(counts)) {
        return classify({
            [`sm:grid-${type}-${counts[0]}`]: counts[0],
            [`md:grid-${type}-${counts[1]}`]: counts[1],
            [`lg:grid-${type}-${counts[2]}`]: counts[2],
        });
    }

    return `sm:grid-${type}-${counts}`;
};

const getRowColSpanClass = (type, counts) => {
    if (Array.isArray(counts)) {
        return classify({
            [`sm:${type}-span-${counts[0]}`]: counts[0],
            [`md:${type}-span-${counts[1]}`]: counts[1],
            [`lg:${type}-span-${counts[2]}`]: counts[2],
        });
    }
    return `sm:${type}-span-${counts}`;
};

/**
 * A quick &amp; easy grid layout component
 **/
export const AutoGrid = ({
    className,
    flow,
    gap,
    gapRow,
    gapCol,
    cols,
    rows,
    rowSpan,
    colSpan,
    children,
    ...props
}) => {
    return (
        <div
            data-testid="auto-grid"
            className={classify(
                "mainsail-auto-grid",
                `grid-flow-${flow}`,
                gap && `gap-${gap}`,
                gapRow && `gap-row-${gapRow}`,
                gapCol && `gap-col-${gapCol}`,
                cols ? getRowColsClass("cols", cols) : null,
                rows ? getRowColsClass("rows", rows) : null,
                colSpan === "auto"
                    ? `col-span-auto`
                    : getRowColSpanClass("col", colSpan),
                rowSpan === "auto"
                    ? `row-span-auto`
                    : getRowColSpanClass("row", rowSpan),
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

AutoGrid.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Direction of content flow (row/col) */
    flow: PropTypes.string,
    /** Grid gap size number for rows and columns */
    gap: PropTypes.oneOf(gaps),
    /** Grid gap size rows */
    gapRow: PropTypes.oneOf(gaps),
    /** Grid gap size for columns */
    gapCol: PropTypes.oneOf(gaps),
    /** Column count for grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use [sm, md, lg]*/
    cols: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row count for grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use [sm, md, lg]*/
    rows: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    colSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row span for item (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
};

AutoGrid.defaultProps = {
    flow: flows.row,
    colSpan: "auto",
    rowSpan: "auto",
};

export const AutoGridItem = ({
    className,
    colSpan,
    rowSpan,
    alignItems,
    justifyItems,
    children,
    ...props
}) => {
    return (
        <div
            className={classify(
                "mainsail-autogrid__item",
                className,
                alignItems && `align-${alignItems}`,
                justifyItems && `justify-${justifyItems}`,
                colSpan === "auto"
                    ? `col-auto`
                    : getRowColSpanClass("col", colSpan),
                rowSpan === "auto"
                    ? `row-auto`
                    : getRowColSpanClass("row", rowSpan)
            )}
            {...props}>
            {children}
        </div>
    );
};

AutoGridItem.propTypes = {
    /** CSS Grid align-items property controls alignment on the block-axis [MDN Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) */
    alignItems: PropTypes.oneOf(Object.values(alignItems)),
    /** CSS Grid justify-items property controls spacing and alignment on the inline-axis [MDN Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) */
    justifyItems: PropTypes.oneOf(Object.values(justifyItems)),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Column span for item (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row span for item (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
};

AutoGridItem.defaultProps = {
    colSpan: "auto",
    rowSpan: "auto",
};

AutoGrid.Item = AutoGridItem;

AutoGrid.flows = flows;
AutoGrid.gaps = gaps;
AutoGridItem.alignItems = alignItems;
AutoGridItem.justifyItems = justifyItems;
