import React from "react";
import PropTypes from "prop-types";
import * as MainsailIcon from "../Icons/index";
import clsx from "clsx";

import "./Icon.scss";

export const names = {
    add: "add",
    archive: "archive",
    automate: "automate",
    back: "back",
    bill: "bill",
    bulktask: "bulktask",
    calendar: "calendar",
    card: "card",
    caret: "caret",
    check: "check",
    close: "close",
    delete: "delete",
    download: "download",
    drafts: "drafts",
    edit: "edit",
    email: "email",
    extensions: "extensions",
    fields: "fields",
    filter: "filter",
    folder_fill: "folder_fill",
    folder: "folder",
    forward: "forward",
    gift: "gift",
    help: "help",
    history: "history",
    link: "link",
    list: "list",
    location: "location",
    lock: "lock",
    logout: "logout",
    message: "message",
    more: "more",
    notification: "notification",
    password: "password",
    people: "people",
    photo: "photo",
    private: "private",
    profile: "profile",
    public: "public",
    refund: "refund",
    saved: "saved",
    search: "search",
    settings: "settings",
    shared: "shared",
    tag_fill: "tag_fill",
    tag: "tag",
    template: "template",
    text: "text",
    update: "update",
    upload: "upload",
    user: "user",
    view: "view",
};

export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
};

export const colors = {
    default: "default",
    dark: "dark",
    light: "light",
};

export const ENUMS = {
    names,
    sizes,
    colors,
};

/**
 * Load an embedded svg component by name. Embedded SVGs can be styled with css! 🎉
 *
 **/

export const Icon = ({ name, size, color, className, ...rest }) => {
    const SvgIcon = MainsailIcon[name];

    if (!SvgIcon) {
        throw Error(`Could not render icon by name of ${name}`);
    }

    return (
        <span className={clsx("mainsail-icon", size, color, className)}>
            <SvgIcon {...rest} />
        </span>
    );
};

Icon.propTypes = {
    /** What type of Icon to use: */
    name: PropTypes.oneOf(Object.keys(names)).isRequired,
    /** What size of Icon to use: */
    size: PropTypes.oneOf(Object.keys(sizes)),
    /** What color tint should the Icon be (omit for default): */
    color: PropTypes.oneOf(Object.keys(colors)),
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
    /** (Optional) click handler */
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    name: names.close,
    size: sizes.md,
    color: colors.default,
};
