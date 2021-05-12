import React, { cloneElement, Children, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { useBreakpoint } from "utility/hooks";
import { isFragment } from "react-is";
import { Column } from "components/Table/Column";
import { Actions } from "components/Table/Actions";
import { Icon } from "components/Icon";
import { Spinner } from "components/Spinner";
import { generateColumnWidthStyle } from "utility/responsive";
import { ARIA_TRANSLATIONS } from "utility/constants";
import { Checkbox } from "components/Checkbox";

import "./Table.scss";

export const variants = {
    bordered: "bordered",
    open: "open",
};

const attachDataToRowCol = (rowData, field) => {
    if (!field) return;

    return rowData[field];
};

/**
 * inferFromChildrenColumns()
 * builds out column config from children when no headerConfig provided
 */
const inferFromChildrenColumns = (breakpoint, cols) => {
    let columns = [];

    for (let col of cols) {
        let props = col.props;

        columns.push({
            field: props.field,
            label:
                props.label || (props.field && props.field.replace(/_/g, " ")),
            align: props.align || Column.alignments.left,
            headerClassName: classify(
                props.headerClassName,
                col.type.displayName === "Actions" && "actions"
            ),
            isSortable: props.isSortable || false,
            style: generateColumnWidthStyle(breakpoint, {
                width: props.width,
                minWidth: props.minWidth,
                maxWidth: props.maxWidth,
            }),
        });
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
    isSelectable,
    onSelect,
    rowData = [],
    headerConfig,
    onSort,
    children,
}) => {
    const breakpoint = useBreakpoint();
    const [columnSort, setColumnSort] = useState();
    let headColConfig = headerConfig;
    const columnArray = isFragment(children)
        ? Children.toArray(children.props.children)
        : Children.toArray(children);

    // Set up a default column config array if Table doesn't receive one
    if (!headerConfig.length) {
        headColConfig = inferFromChildrenColumns(breakpoint, columnArray);
    }

    const handleSort = ({ field }) => {
        if (typeof onSort != "function") {
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

        onSort && onSort(newSort);
        setColumnSort(newSort);
    };

    const handleSelect = (row, state, e) => {
        onSelect && onSelect(row, state, e);
    };

    const getRowById = (id) => rowData.find((row) => row.id === id);

    /** Render the table row wrapper */
    const renderRow = (row, idx) => {
        /** This Func injects Row Data/Props to Row Children (Cols) */
        let columns = (data) =>
            columnArray.map((child) => {
                return cloneElement(child, {
                    ...child.props,
                    breakpoint,
                    getRowData: () => getRowById(row.id),
                    rowId: row.id,
                    children: child.props.field
                        ? attachDataToRowCol(data, child.props.field)
                        : child.props.children,
                });
            });

        return (
            <div
                role="row"
                key={`row-${row.id || idx}`}
                className={classify("mainsail-table__row")}>
                {isSelectable ? (
                    <div className="mainsail-table__row-selector">
                        <Checkbox
                            onChange={(e) =>
                                handleSelect(row, e.currentTarget.checked, e)
                            }
                        />
                    </div>
                ) : null}
                {columns(row)}
            </div>
        );
    };

    /** Render the table column header */
    const renderTableHeader = (columnConfigArray = []) => {
        let getSortDirByField = (field) => columnSort && columnSort[field];

        return (
            <div className={classify("mainsail-table__header", variant)}>
                {isSelectable ? (
                    <div className="mainsail-table__header-selector"></div>
                ) : null}

                {columnConfigArray.map((hCol, i) => {
                    let sort = getSortDirByField(hCol.field);

                    return (
                        <div
                            key={i}
                            style={hCol.style}
                            role="columnheader"
                            aria-sort={
                                hCol.isSortable ? ARIA_TRANSLATIONS[sort] : ""
                            }
                            className={classify(
                                "column-header",
                                hCol.headerClassName,
                                hCol.isSortable && "sortable",
                                hCol.align
                            )}
                            onClick={
                                hCol.isSortable
                                    ? () => handleSort({ field: hCol.field })
                                    : null
                            }>
                            {hCol.label}
                            {hCol.isSortable ? (
                                <Icon
                                    className={classify(sort)}
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
                <div
                    role="progressbar"
                    aria-busy="true"
                    className="mainsail-table__spinner">
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
            align: PropTypes.oneOf(Object.values(Column.alignments)),
            minWidth: PropTypes.any,
            maxWidth: PropTypes.any,
            width: PropTypes.any,
            className: PropTypes.string,
            headerClassName: PropTypes.string,
            isSortable: PropTypes.bool,
        })
    ),
    /** Data array for the table */
    variant: PropTypes.oneOf(Object.values(variants)),
    /** Data array for the table, ensure that each object has an `id` key */
    rowData: PropTypes.arrayOf(PropTypes.object),
    /** Style class to add to component wrapper */
    className: PropTypes.string,
    /** Callback that fires when column is sorted, sort function receives table sort object {field1: dir, field2: dir} */
    onSort: PropTypes.func,
    /** Allows row selection */
    isSelectable: PropTypes.bool,
    /** Callback that fires when row is selected, onSelect has a signature of `(row, checkedState, eventObject) => {}` */
    onSelect: PropTypes.func,
    /** Control a loading state for the entire table to display a spinner */
    isLoading: PropTypes.bool,
};

Table.defaultProps = {
    variant: variants.bordered,
    headerConfig: [],
};

Table.variants = variants;
Table.Column = Column;
Table.Actions = Actions;
