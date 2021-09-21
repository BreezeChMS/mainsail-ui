import React from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";

export const sizes = {
    sm: "sm",
    md: "md",
};

/**
 * Circular image display component for a user avatar (Note: native img element props like `alt` are passed through)
 **/
export const Avatar = ({ className, src, size, ...props }) => {
    return (
        <img
            src={src}
            className={classify("mainsail-avatar", size, className)}
            {...props}
        />
    );
};

Avatar.propTypes = {
    /** Url path to image */
    src: PropTypes.string.isRequired,
    /** Size of the image */
    size: PropTypes.string,
    /** Style class to add to img */
    className: PropTypes.string,
};

Avatar.defaultProps = {
    size: sizes.md,
};

Avatar.sizes = sizes;
