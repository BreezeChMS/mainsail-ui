import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { PopMenu } from "components/PopMenu";
import { Icon } from "components/Icon";
import { generateColumnWidthStyle } from "utility/responsive";

import "./Table.scss";

const alignments = {
    left: "left",
    center: "center",
    right: "right",
};

/**
 * Row Actions for a Table
 **/
export const Actions = ({
    breakpoint, // eslint-disable-line react/prop-types
    getRowData, // eslint-disable-line react/prop-types
    className,
    width,
    minWidth,
    maxWidth,
    menuOptions,
    children,
    modifiers,
}) => {
    let styles = generateColumnWidthStyle(breakpoint, {
        width,
        minWidth,
        maxWidth,
    });

    return (
        <div
            className={classify("mainsail-row-actions", className)}
            style={styles}>
            <div className="mainsail-row-actions__buttons">{children}</div>
            <PopMenu
                modifiers={modifiers}
                menuOffset={-6}
                positioning={PopMenu.positionings.fixed}
                trigger={
                    <button
                        role="button"
                        className="mainsail-row-actions__default">
                        <Icon
                            className="py-6"
                            size={Icon.sizes.lg}
                            name={Icon.names.more}
                        />
                    </button>
                }>
                {typeof menuOptions === "function"
                    ? menuOptions(getRowData())
                    : menuOptions}
            </PopMenu>
        </div>
    );
};

Actions.propTypes = {
    /** Position the dropdown menu */
    placement: PropTypes.oneOf(Object.values(PopMenu.placements)),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning of dropdown menu. */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** Array of PopMenu Items, if passing a function, it will receive row data as an argument */
    menuOptions: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.node,
    ]),
    /** Style class to add to component */
    className: PropTypes.string,
    /** Style class to add to column header */
    headerClassName: PropTypes.string,
    /** Excplicit Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    width: PropTypes.any,
    /** Minimum Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    minWidth: PropTypes.any,
    /** Width allowed for the column, Note: passing an array of up to 3 values representing sm,md,lg breakpoints is supported */
    maxWidth: PropTypes.any,
};

Actions.defaultProps = {
    align: alignments.right,
    minWidth: "80px",
};

Actions.displayName = "Actions";
Actions.alignments = alignments;
Actions.placements = PopMenu.placements;
