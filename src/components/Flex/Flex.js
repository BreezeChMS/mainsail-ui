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
    justifyContent,
    className,
    ...props
}) => {
    return (
        <div
            data-testid="flex-row"
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

FlexRow.propTypes = {
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Flex align-items property controls alignment on the cross-axis */
    alignItems,
    /** Flex justify-content property controls spacing and alignment on the main-axis */
    justifyContent,
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
};

FlexCol.defaultProps = {
    alignItems: alignItems.flexStart,
    justifyContent: justifyContent.flexStart,
};

FlexCol.alignItems = alignItems;
FlexCol.justifyContent = justifyContent;

export const Flex = { Row: FlexRow, Col: FlexCol };
