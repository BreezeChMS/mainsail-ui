import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import clsx from "clsx";

import "./Icon.scss";

export const ICON_LIST = [
    "archive",
    "box-checked",
    "box-indeterminate",
    "box-unchecked",
    "calendar",
    "caret",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "close",
    "delete",
    "email",
    "fields",
    "filter",
    "folder",
    "image",
    "info-circle",
    "link",
    "location",
    "people",
    "person",
    "plus",
    "search",
    "tag",
    "tags",
    "text",
    "update",
    "upload",
];

/**
 * Load an embedded svg component by name. Embedded SVGs can be styled with css! 🎉
 *
 * Uses https://www.npmjs.com/package/react-svg under the hood.
 * (Caches icon by default)
 **/

export const Icon = ({ name, className, ...rest }) => {
    return (
        <ReactSVG
            src={`../icons/${name}.svg`}
            wrapper="span"
            className={clsx("mainsail-icon-wrapper", className)}
            {...rest}
        />
    );
};

Icon.propTypes = {
    /** What type of Icon to use: */
    name: PropTypes.string.isRequired,
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    name: "close",
};
