import React from "react";
import PropTypes from "prop-types";
import * as MainsailIcon from "components/Icons";
import { classify } from "utility/classify";

import "./Icon.scss";

const toFileCase = (str) =>
    str
        .split("_")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        )
        .join("");

export const names = {
    preferences: "preferences",
    spreadsheet: "spreadsheet",
    unarchive: "unarchive",
    document: "document",
    mailing_label: "mailing_label",
    warning: "warning",
    add: "add",
    apps: "apps",
    archive: "archive",
    automate: "automate",
    back: "back",
    bill: "bill",
    bulktask: "bulktask",
    calendar: "calendar",
    cancel: "cancel",
    card: "card",
    caret: "caret",
    chart_bar: "chart_bar",
    check: "check",
    close: "close",
    code: "code",
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
    giving: "giving",
    help: "help",
    history: "history",
    hamburger: "hamburger",
    home: "home",
    install: "install",
    link: "link",
    list: "list",
    location: "location",
    lock: "lock",
    logout: "logout",
    merge: "merge",
    message: "message",
    more: "more",
    notes: "notes",
    notification: "notification",
    password: "password",
    people: "people",
    photo: "photo",
    pray: "pray",
    private: "private",
    profile: "profile",
    public: "public",
    refund: "refund",
    report: "report",
    roles: "roles",
    saved: "saved",
    scan: "scan",
    search: "search",
    settings: "settings",
    shared: "shared",
    tag_fill: "tag_fill",
    tag: "tag",
    task: "task",
    task_fill: "task_fill",
    template: "template",
    text: "text",
    update: "update",
    upload: "upload",
    user: "user",
    view: "view",
    volunteer: "volunteer",
};

export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
};

export const colors = {
    default: "default",
    dark: "dark",
    light: "light",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {
    names,
    sizes,
    colors,
};

/**
 * Load an embedded svg component by name. Embedded SVGs can be styled with css! 🎉
 *
 **/

export const Icon = ({ name, size, color, className, isDisabled, ...rest }) => {
    const fileCase = toFileCase(name);
    const SvgIcon = MainsailIcon[fileCase];

    if (!SvgIcon) {
        console.warn(
            `Could not render icon by name of ${name} from Icons/${fileCase}.js`
        );
        return null;
    }

    return (
        <span
            role="img"
            className={classify(
                "mainsail-icon",
                { disabled: isDisabled },
                size,
                color,
                className
            )}>
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
    /** Disabled state */
    isDisabled: PropTypes.bool,
};

Icon.defaultProps = {
    name: names.close,
    size: sizes.md,
    color: colors.default,
};

Icon.names = names;
Icon.sizes = sizes;
Icon.colors = colors;
