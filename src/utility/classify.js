import clsx from "clsx";

/**
 * classify(mixed)
 * A class concatenator utility helper (wrapper around clsx)
 * See docs: https://www.npmjs.com/package/clsx
 */
export const classify = (...args) => {
    return clsx(...args);
};
