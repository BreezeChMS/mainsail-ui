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

/**
 * A quick &amp; easy grid layout component
 **/
export const AutoGrid = ({
    className,
    flow,
    gap,
    cols,
    rows,
    children,
    ...props
}) => {
    return (
        <div
            data-testid="auto-grid"
            className={classify(
                "mainsail-auto-grid",
                `grid-flow-${flow}`,
                `gap-${gap}`,
                cols ? `grid-cols-${cols}` : null,
                rows ? `grid-rows-${rows}` : null,
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
    /** Grid gap size number */
    gap: PropTypes.oneOf(gaps),
    /** Column count for grid (count 1-12 / "auto") */
    cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Row count for grid (count 1-12 / "auto")*/
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AutoGrid.defaultProps = {
    gap: 20,
    flow: flows.row,
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
                colSpan === "auto" ? `col-auto` : `col-span-${colSpan}`,
                rowSpan === "auto" ? `col-auto` : `row-span-${rowSpan}`
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
    /** Column span for item (count 1-12 / "auto") */
    colSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Row span for item (count 1-12 / "auto")*/
    rowSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AutoGridItem.defaultProps = {
    colSpan: "auto",
    rowSpan: "auto",
};

AutoGrid.Item = AutoGridItem;

AutoGrid.flows = flows;
AutoGridItem.alignItems = alignItems;
AutoGridItem.justifyItems = justifyItems;
