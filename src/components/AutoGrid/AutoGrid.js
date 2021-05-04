import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./AutoGrid.scss";

export const flows = {
    row: "row",
    col: "col",
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
    children,
    ...props
}) => {
    return (
        <div
            className={classify(
                className,
                colSpan === "auto" ? `col-auto` : `col-span-${colSpan}`,
                rowSpan === "auto" ? `col-auto` : `row-span-${rowSpan}`
            )}
            {...props}>
            {children}
        </div>
    );
};

AutoGridItem.propTypes = {
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
