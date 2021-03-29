import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon, ENUMS as IconENUMS } from "../Icon/Icon";

import "./Badge.scss";

export const sizes = {
    sm: "sm",
    lg: "lg",
};

export const variants = {
    basic: "basic",
    removable: "removable",
};

export const ENUMS = {
    sizes,
    variants,
    colors: {
        blue: "blue",
        green: "green",
        violet: "violet",
        orange: "orange",
        pink: "pink",
        red: "red",
        neutral: "neutral",
    },
};

/**
 * A small component for presenting a small amount of text or data.
 **/
export const Badge = ({
    className,
    text,
    children,
    color,
    variant,
    size,
    isRounded,
    onRemove,
    ...rest
}) => {
    let bgColor = `bg-${color}-${color !== "neutral" ? "light" : "5"}`;
    let textColor = `text-${color}-${color !== "neutral" ? "middle" : "2"}`;

    return (
        <div
            className={clsx(
                className,
                "mainsail-badge",
                bgColor,
                textColor,
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
                        className={textColor}
                        size={IconENUMS.sizes.sm}
                        name={IconENUMS.names.close}
                    />
                </button>
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
    color: PropTypes.oneOf(ENUMS.colors),
    /** Size of Badge to use: */
    size: PropTypes.oneOf(Object.keys(sizes)),
    /** Fully round or square: */
    isRounded: PropTypes.bool,
};

Badge.defaultProps = {
    variant: ENUMS.variants.basic,
    color: ENUMS.colors.neutral,
    size: sizes.lg,
    isRounded: false,
};
