import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

export const colors = {
    default: "default",
    dark: "dark",
    light: "light",
};

/**
 * A styles progress bar to show a completion amount
 **/
export const ProgressBar = ({
    className,
    classNameBar,
    percentage,
    color,
    ...props
}) => {
    return (
        <div
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            className={classify("mainsail-progress", color, className)}
            {...props}>
            <div
                className={classify(
                    "mainsail-progress__bar",
                    color,
                    classNameBar
                )}
                style={{
                    width: `${Math.round((percentage * 100) / 100)}%`,
                }}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    /** The current percentage value of completion */
    percentage: PropTypes.number,
    /** Style class to add to wrapping bar (can be styled with utility classes e.g. bg-neutral-6 border-blue-primary) */
    className: PropTypes.string,
    /** Style class to add to percentage bar (can control height with utility classes e.g. pt-4) */
    classNameBar: PropTypes.string,
    /** Color tint of progress bar */
    color: PropTypes.oneOf(Object.keys(colors)),
};

ProgressBar.defaultProps = {
    color: colors.default,
    percentage: 0,
};

ProgressBar.colors = colors;
