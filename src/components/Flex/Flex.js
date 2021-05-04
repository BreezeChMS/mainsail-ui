import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Flex.scss";

/**
 * Define and export enumerable prop values for use (then attach to component below)
 * e.g. export const colors = {
 *    color1: "color1"
 * }
 */

export const alignItems = {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
};

export const justifyContent = {
    spaceAround: "space-around",
    spaceBetween: "space-between",
    spaceEvenly: "space-evenly",
    flexStart: "flex-start",
    flexEnd: "flex-end",
    center: "center",
};

/**
 * A layout utility built with flex box
 **/
export const Row = ({
    children,
    alignItems,
    justifyContent,
    // expanded,
    // lg,
    // md,
    // sm,
    className,
    ...props
}) => {
    return (
        <div
            className={classify(
                "mainsail-flex row",
                alignItems && `align-${alignItems}`,
                justifyContent && `justify-${justifyContent}`,
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

Row.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Flex align-items property controls alignment on the cross-axis */
    alignItems,
    /** Flex justify-content property controls spacing and alignment on the main-axis */
    justifyContent,
};

Row.defaultProps = {};
Row.alignItems = alignItems;
Row.justifyContent = justifyContent;

export const Col = ({
    className,
    alignItems,
    justifyContent,
    lg,
    md,
    sm,
    hasGutters,
    children,
    ...props
}) => {
    return (
        <div
            className={classify(
                "mainsail-flex column",
                alignItems && `align-${alignItems}`,
                justifyContent && `justify-${justifyContent}`,
                sm && `sm-${sm}`,
                md && `md-${md}`,
                lg && `lg-${lg}`,
                hasGutters && "gutters",
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

Col.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Flex align-items property controls alignment on the cross-axis */
    alignItems: PropTypes.oneOf(Object.values(alignItems)),
    /** Flex justify-content property controls spacing and alignment on the main-axis */
    justifyContent: PropTypes.oneOf(Object.values(justifyContent)),
    /** Column size for responsive lg breakpoint */
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /** Column size for responsive md breakpoint */
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /** Column size for responsive sm breakpoint */
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /** Determines if negative margins for row and padding for columns are used */
    hasGutters: PropTypes.bool,
};

Col.defaultProps = {};
Col.alignItems = alignItems;
Col.justifyContent = justifyContent;

export const Flex = { Row, Col };
