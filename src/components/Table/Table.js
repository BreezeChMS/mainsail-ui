import React, { cloneElement, Children, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
// import { useUniqueId } from "utility/hooks";
import { isFragment } from "react-is";
import { Column } from "components/Table/Column";
import { Icon } from "components/Icon";
import { Spinner } from "components/Spinner";

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
                label:
                    props.label ||
                    (props.field && props.field.replace(/_/g, " ")),
                align: props.align || Column.aligments.left,
                className: props.className || "",
                isSortable: props.isSortable || false,
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
    isLoading,
    rowData = [],
    headerConfig,
    onSort,
    children,
    // ...props
}) => {
    const [columnSort, setColumnSort] = useState();
    let headColConfig = headerConfig;
    const columnArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    // Set up a default column config array if Table doesn't receive one
    if (!headerConfig.length) {
        headColConfig = inferFromChildrenColumns(columnArray);
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
                role="row"
                key={`row-${idx}`}
                className={classify("mainsail-table__row")}>
                {columns(row)}
            </div>
        );
    };

    const handleSort = ({ field }) => {
        if (typeof onSort !== "function") {
            return;
        }

        let dir = columnSort && columnSort[field];
        let newSort = {};

        switch (dir) {
            case "asc":
                newSort = {
                    [field]: "desc",
                };
                break;
            case "desc":
                newSort = {
                    [field]: null,
                };
                break;
            default:
                newSort = {
                    [field]: "asc",
                };

                break;
        }

        setColumnSort(newSort);

        onSort && onSort(newSort);
    };

    const renderTableHeader = (columnConfigArray = []) => {
        let getSortDirByField = (field) => columnSort && columnSort[field];
        return (
            <div className={classify("mainsail-table__header", variant)}>
                {columnConfigArray.map((hCol, i) => {
                    return (
                        <div
                            key={i}
                            role="columnheader"
                            className={classify(
                                "column-header",
                                hCol.className,
                                hCol.isSortable && "sortable",
                                hCol.align
                            )}
                            onClick={
                                onSort
                                    ? () => handleSort({ field: hCol.field })
                                    : null
                            }>
                            {hCol.label}
                            {hCol.isSortable ? (
                                <Icon
                                    className={classify(
                                        getSortDirByField(hCol.field)
                                    )}
                                    name={Icon.names.caret}
                                />
                            ) : null}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            role="table"
            className={classify(
                "mainsail-table",
                className,
                variant,
                isLoading && "loading"
            )}>
            {renderTableHeader(headColConfig)}
            {isLoading ? (
                <div className="mainsail-table__spinner">
                    <Spinner />
                </div>
            ) : null}
            <div className="mainsail-table__body">
                {rowData.map((row, idx) => renderRow(row, idx))}
            </div>
        </div>
    );
};

Table.propTypes = {
    /** Predefined object configuration for column structure (overrides inferrance from row data) */
    headerConfig: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string,
            label: PropTypes.string,
            align: PropTypes.oneOf(Object.values(Column.aligments)),
            minWidth: PropTypes.string,
            maxWidth: PropTypes.string,
            className: PropTypes.string,
            isSortable: PropTypes.bool,
        })
    ),
    /** Data array for the table */
    variant: PropTypes.oneOf(Object.values(variants)),
    /** Data array for the table */
    rowData: PropTypes.arrayOf(PropTypes.object),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Callback that fires when column is sorted, sort function receives table sort object {field1: dir, field2: dir} */
    onSort: PropTypes.func,
    /** Control a loading state for the entire table to display a spinner */
    isLoading: PropTypes.bool,
};

Table.defaultProps = {
    variant: variants.bordered,
    headerConfig: [],
};

Table.variants = variants;
