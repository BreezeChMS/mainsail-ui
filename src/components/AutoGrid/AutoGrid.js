import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./AutoGrid.scss";

export const flows = {
    row: "row",
    col: "col",
};

export const gaps = [0, 4, 8, 10, 12, 15, 20, 30, 48];

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
            className={classify(
                "mainsail-auto-grid",
                `grid-flow-${flow}`,
                `gap-${gap}`,
                `grid-cols-${cols}`,
                `grid-rows-${rows}`,
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
    /** Grid gap size */
    gap: PropTypes.oneOf(gaps),
    /** Column count for grid (count / "auto") */
    cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Row count for grid (count / "auto")*/
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AutoGrid.defaultProps = {
    cols: 3,
    rows: 3,
    gap: 20,
    flow: flows.row,
};

AutoGrid.flows = flows;
