import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./Flex.scss";

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
export const FlexRow = ({
    children,
    alignItems,
    isFullWidth,
    shouldWrap,
    shouldWrapReverse,
    justifyContent,
    className,
    ...props
}) => {
    return (
        <div
            data-testid="flex-row"
            className={classify(
                "mainsail-flex row",
                isFullWidth && "full-width",
                alignItems && `align-${alignItems}`,
                justifyContent && `justify-${justifyContent}`,
                shouldWrap && "wrap",
                shouldWrapReverse && "wrap-reverse",
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

FlexRow.propTypes = {
    /** Sets flex row to wrap elements  */
    shouldWrap: PropTypes.bool,
    /** Sets flex row to wrap elements in reverse  */
    shouldWrapReverse: PropTypes.bool,
    /** Sets width to maximum  */
    isFullWidth: PropTypes.bool,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Flex align-items property controls alignment on the cross-axis */
    alignItems: PropTypes.oneOf(Object.values(alignItems)),
    /** Flex justify-content property controls spacing and alignment on the main-axis */
    justifyContent: PropTypes.oneOf(Object.values(justifyContent)),
};

FlexRow.defaultProps = {
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.flexStart,
};
FlexRow.alignItems = alignItems;
FlexRow.justifyContent = justifyContent;

export const FlexCol = ({
    className,
    alignItems,
    justifyContent,
    lg,
    md,
    sm,
    shouldGrow,
    shouldShrink,
    children,
    ...props
}) => {
    return (
        <div
            data-testid="flex-col"
            className={classify(
                "mainsail-flex column",
                alignItems && `align-${alignItems}`,
                justifyContent && `justify-${justifyContent}`,
                sm && `sm-${sm}`,
                md && `md-${md}`,
                lg && `lg-${lg}`,
                shouldGrow && "grow",
                shouldShrink && "shrink",
                className
            )}
            {...props}>
            {children}
        </div>
    );
};

FlexCol.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Sets flex-grow on column  */
    shouldGrow: PropTypes.bool,
    /** Sets flex-shrink on column  */
    shouldShrink: PropTypes.bool,
    /** Flex align-items property controls alignment on the cross-axis */
    alignItems: PropTypes.oneOf(Object.values(alignItems)),
    /** Flex justify-content property controls spacing and alignment on the main-axis */
    justifyContent: PropTypes.oneOf(Object.values(justifyContent)),
    /** Column size for responsive lg breakpoint */
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /** Column size for responsive md breakpoint */
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /** Column size for responsive sm breakpoint (and up, if larger is omitted) */
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

FlexCol.defaultProps = {
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.flexStart,
    shouldGrow: false,
    shouldShrink: false,
};

FlexCol.alignItems = alignItems;
FlexCol.justifyContent = justifyContent;

export const Flex = { Row: FlexRow, Col: FlexCol };
