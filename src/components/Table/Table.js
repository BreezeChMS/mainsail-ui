import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
// import { useUniqueId } from "utility/hooks";
import { isFragment } from "react-is";

import "./Table.scss";

export const variants = {
    bordered: "bordered",
    open: "open",
};

const attachDataToRowCol = (rowData, field) => {
    if (!field) return;
    console.log("Row Data:", rowData[field]);

    return rowData[field];
};

const inferTableHeaderFromRow = (rowData = {}) => {
    return Object.keys(rowData);
};

/**
 * Display data in a table-like styled grid
 **/
export const Table = ({
    className,
    variant,
    rowData = [],
    children,
    // ...props
}) => {
    const childrenArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    let rowChildren = (data) =>
        childrenArray.map((child) => {
            return cloneElement(child, {
                ...child.props,
                children: attachDataToRowCol(data, child.props.field),
            });
        });

    const renderRow = (row) => {
        return (
            <div className={classify("mainsail-table__row", variant)}>
                {rowChildren(row)}
            </div>
        );
    };

    const renderTableHeader = (row) => {
        return (
            <div className={classify("mainsail-table__header", variant)}>
                {inferTableHeaderFromRow(row).map((headerItem, i) => {
                    return (
                        <div key={i} className="column-header">
                            {headerItem}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={classify("mainsail-table", className)}>
            {renderTableHeader(rowData[0])}
            <div className="mainsail-table__body">
                {rowData.map((row) => renderRow(row))}
            </div>
        </div>
    );
};

Table.propTypes = {
    /** Data array for the table */
    variant: PropTypes.oneOf(Object.values(variants)),
    /** Data array for the table */
    rowData: PropTypes.arrayOf(PropTypes.object),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Table.defaultProps = {
    variant: variants.bordered,
};

Table.variants = variants;
