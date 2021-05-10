import React, { cloneElement, Children } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
// import { useUniqueId } from "utility/hooks";
import { isFragment } from "react-is";
import { Column } from "components/Table/Column";

import "./Table.scss";

export const variants = {
    bordered: "bordered",
    open: "open",
};

const attachDataToRowCol = (rowData, field) => {
    if (!field) return;

    return rowData[field];
};

const inferFromChildrenColumns = (cols) => {
    let columns = [];

    for (let col of cols) {
        let props = col.props;
        columns = [
            ...columns,
            {
                field: props.field,
                label: props.label || props.field.replace(/_/g, " "),
                align: props.align || Column.aligments.left,
                className: props.className || "",
                sortable: props.sortable || false,
            },
        ];
    }

    return columns;
};

/**
 * Display data in a table-like styled grid
 **/
export const Table = ({
    className,
    variant,
    rowData = [],
    colConfig,
    children,
    // ...props
}) => {
    let columnConfig = colConfig;
    const columnArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    // Set up a default column config array if Table doesn't receive one
    if (!colConfig.length) {
        columnConfig = inferFromChildrenColumns(columnArray);
    }

    const renderRow = (row, idx) => {
        // Inject Row Data to Columns
        let columns = (data) =>
            columnArray.map((child) => {
                return cloneElement(child, {
                    ...child.props,
                    children: attachDataToRowCol(data, child.props.field),
                });
            });

        return (
            <div
                key={`row-${idx}`}
                className={classify("mainsail-table__row", variant)}>
                {columns(row)}
            </div>
        );
    };

    const renderTableHeader = (columnConfigArray = []) => {
        return (
            <div className={classify("mainsail-table__header", variant)}>
                {columnConfigArray.map((hCol, i) => {
                    return (
                        <div
                            key={i}
                            className={classify(
                                "column-header",
                                hCol.className,
                                hCol.align
                            )}>
                            {hCol.label}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={classify("mainsail-table", className)}>
            {renderTableHeader(columnConfig)}
            <div className="mainsail-table__body">
                {rowData.map((row, idx) => renderRow(row, idx))}
            </div>
        </div>
    );
};

Table.propTypes = {
    /** Predefined object configuration for column structure (overrides inferrance from row data) */
    colConfig: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string,
            label: PropTypes.string,
            align: PropTypes.oneOf(Object.values(Column.aligments)),
            minWidth: PropTypes.string,
            maxWidth: PropTypes.string,
            className: PropTypes.string,
            sortable: PropTypes.bool,
        })
    ),
    /** Data array for the table */
    variant: PropTypes.oneOf(Object.values(variants)),
    /** Data array for the table */
    rowData: PropTypes.arrayOf(PropTypes.object),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Table.defaultProps = {
    variant: variants.bordered,
    colConfig: [],
};

Table.variants = variants;
