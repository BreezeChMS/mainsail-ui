import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

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

const getRowColStartEndClass = (type, counts) => {
    if (Array.isArray(counts)) {
        return classify({
            [`sm:${type}-${counts[0]}`]: counts[0],
            [`md:${type}-${counts[1]}`]: counts[1],
            [`lg:${type}-${counts[2]}`]: counts[2],
        });
    }
    return `sm:${type}-${counts}`;
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
    rowStart,
    rowEnd,
    colStart,
    colEnd,
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
                {
                    [getRowColSpanClass("col", colSpan)]:
                        !colStart && colSpan !== "auto",
                    [getRowColSpanClass("row", rowSpan)]:
                        !rowStart && rowSpan !== "auto",
                    "sm:col-span-auto": !colStart && colSpan === "auto",
                    "sm:row-span-auto": !rowStart && rowSpan === "auto",
                },
                rowStart && getRowColStartEndClass("row-start", rowStart),
                rowEnd && getRowColStartEndClass("row-end", rowEnd),
                colStart && getRowColStartEndClass("col-start", colStart),
                colEnd && getRowColStartEndClass("col-end", colEnd),
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
    /** Column span for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row span for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowSpan: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row start for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row end for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowEnd: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Column start for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Column end for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colEnd: PropTypes.oneOfType([
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
    rowStart,
    colStart,
    rowEnd,
    colEnd,
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
                {
                    [getRowColSpanClass("col", colSpan)]:
                        !colStart && colSpan !== "auto",
                    [getRowColSpanClass("row", rowSpan)]:
                        !rowStart && rowSpan !== "auto",
                    "sm:col-span-auto": !colStart && colSpan === "auto",
                    "sm:row-span-auto": !rowStart && rowSpan === "auto",
                },
                rowStart && getRowColStartEndClass("row-start", rowStart),
                rowEnd && getRowColStartEndClass("row-end", rowEnd),
                colStart && getRowColStartEndClass("col-start", colStart),
                colEnd && getRowColStartEndClass("col-end", colEnd)
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
    /** Row start for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Row end for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    rowEnd: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Column start for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colStart: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    /** Column end for a nested grid (count 1-12 / "auto") can pass in array of up to three counts for responsive breakpoints to use where [sm, md, lg]*/
    colEnd: PropTypes.oneOfType([
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
