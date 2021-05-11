import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Dropdown } from "components/Dropdown";
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
    className,
    options,
    width,
    minWidth,
    maxWidth,
    children,
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
            <div>{children}</div>
            <Dropdown
                hasCaret={false}
                options={options}
                menuOffset={-6}
                positioning={Dropdown.positionings.fixed}
                customTrigger={
                    <button className="mainsail-row-actions__default">
                        <Icon
                            className="py-6"
                            size={Icon.sizes.lg}
                            name={Icon.names.more}
                        />
                    </button>
                }
            />
        </div>
    );
};

Actions.propTypes = {
    /** Position the dropdown menu */
    placement: PropTypes.oneOf(Object.values(Dropdown.placements)),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning of dropdown menu. */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** Array of dropdown menu choices must at a minimum contain keys `text` and `value` */
    options: PropTypes.arrayOf(PropTypes.object),
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
Actions.placements = Dropdown.placements;
