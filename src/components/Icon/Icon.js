import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import clsx from "clsx";

import "./Icon.scss";

export const ICON_LIST = [
    "add",
    "archive",
    "automate",
    "back",
    "bill",
    "bulktask",
    "calendar",
    "card",
    "caret",
    "check",
    "close",
    "delete",
    "download",
    "drafts",
    "edit",
    "email",
    "extensions",
    "fields",
    "filter",
    "folder-fill",
    "folder",
    "forward",
    "gift",
    "help",
    "history",
    "link",
    "list",
    "location",
    "lock",
    "logout",
    "message",
    "more",
    "notification",
    "password",
    "people",
    "photo",
    "private",
    "profile",
    "public",
    "refund",
    "saved",
    "search",
    "settings",
    "shared",
    "tag-fill",
    "tag",
    "template",
    "text",
    "update",
    "upload",
    "user",
    "view",
];

/**
 * Load an embedded svg component by name. Embedded SVGs can be styled with css! 🎉
 *
 * Uses https://www.npmjs.com/package/react-svg under the hood.
 * (Caches icon by default)
 **/

export const Icon = ({ name, size, className, ...rest }) => {
    return (
        <ReactSVG
            src={`../icons/${name}.svg`}
            wrapper="span"
            className={clsx("mainsail-icon", size, className)}
            {...rest}
        />
    );
};

Icon.propTypes = {
    /** What type of Icon to use: */
    name: PropTypes.oneOf(ICON_LIST).isRequired,
    /** What size of Icon to use: */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    name: "close",
    size: "md",
};
