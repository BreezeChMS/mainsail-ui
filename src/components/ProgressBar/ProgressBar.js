import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

import "./ProgressBar.scss";

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
    /** Style class to add to bar background */
    className: PropTypes.string,
    /** Style class to add to percentage bar */
    classNameBar: PropTypes.string,
    /** Color tint of progress bar */
    color: PropTypes.oneOf(Object.keys(colors)),
};

ProgressBar.defaultProps = {
    color: colors.default,
    percentage: 0,
};

ProgressBar.colors = colors;
