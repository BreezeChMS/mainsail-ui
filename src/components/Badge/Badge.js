import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";
import { Icon, ENUMS as IconENUMS } from "../Icon/Icon";

import "./Badge.scss";

export const sizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
};

export const variants = {
    basic: "basic",
    removable: "removable",
    icon: "icon",
};

export const ENUMS = {
    sizes,
    variants,
    colors: {
        blue: {
            light: "blue-light",
            primary: "blue-primary",
            middle: "blue-middle",
            dark: "blue-dark",
        },
        green: {
            light: "green-light",
            middle: "green-middle",
            dark: "green-dark",
        },
        violet: {
            light: "violet-light",
            middle: "violet-middle",
            dark: "violet-dark",
        },
        orange: {
            light: "orange-light",
            middle: "orange-middle",
            dark: "orange-dark",
        },
        red: {
            light: "red-light",
            middle: "red-middle",
            dark: "red-dark",
        },
        neutral: {
            one: "neutral-1",
            two: "neutral-2",
            three: "neutral-3",
            four: "neutral-4",
            five: "neutral-5",
            six: "neutral-6",
        },
    },
};
const colorsMap = _.flatMapDeep(ENUMS.colors);
export const flatColorList = [];

for (let color in colorsMap) {
    for (let v in colorsMap[color]) {
        flatColorList.push(colorsMap[color][v]);
    }
}

/**
 * A small component for presenting a small amount of text or data.
 **/
export const Badge = ({
    className,
    text,
    children,
    textColor,
    color,
    variant,
    size,
    icon,
    isRounded,
    onRemove,
    ...rest
}) => {
    if (variant !== ENUMS.variants.removable && icon) {
        variant = ENUMS.variants.icon;
    }

    return (
        <div
            className={clsx(
                className,
                "mainsail-badge",
                `bg-${color}`,
                `text-${textColor}`,
                size,
                variant,
                isRounded ? "rounded" : "square"
            )}
            {...rest}>
            {variant !== ENUMS.variants.icon ? text : null}
            {variant !== ENUMS.variants.icon ? children : null}
            {variant === ENUMS.variants.removable ? (
                <button onClick={onRemove}>
                    <Icon
                        className={`text-${textColor}`}
                        size={IconENUMS.sizes.sm}
                        name={icon || IconENUMS.names.close}
                    />
                </button>
            ) : null}
            {variant === ENUMS.variants.icon ? (
                <Icon name={icon} size={size} className={`text-${textColor}`} />
            ) : null}
        </div>
    );
};

Badge.propTypes = {
    /** Changes the overall style of badge: */
    variant: PropTypes.oneOf(Object.keys(ENUMS.variants)),
    /** Badge text to display, can also optionally provide children. */
    text: PropTypes.string,
    /** (Optional click handler) when using the removable variant */
    onRemove: PropTypes.func,
    /** Style class to add to badge element */
    className: PropTypes.string,
    /** Background color (omit for default): */
    color: PropTypes.oneOf(flatColorList),
    /** Color of text (omit for default): */
    textColor: PropTypes.oneOf(flatColorList),
    /** Size of Badge to use: */
    size: PropTypes.oneOf(Object.keys(sizes)),
    /** Fully round or square: */
    isRounded: PropTypes.bool,
    /** Icon to display if icon only */
    icon: PropTypes.oneOf(Object.keys(IconENUMS.names)),
};

Badge.defaultProps = {
    variant: ENUMS.variants.basic,
    color: ENUMS.colors.neutral.six,
    textColor: ENUMS.colors.neutral.one,
    size: sizes.md,
    isRounded: true,
};
