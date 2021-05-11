/**
 * convertFromResponsiveArray()
 * provides a conversion from a responsive array example ["90px", "120px", ""] to the current breakpoint value
 * @param {*} breakpoints
 * @param {*} mixed
 * @returns
 */

export const convertFromResponsiveArray = (breakpoints, mixed) => {
    if (Array.isArray(mixed)) {
        let mapSizeToMinWidth = {
            sm: mixed[0] || "auto",
            md: mixed[1] || "auto",
            lg: mixed[2] || "auto",
        };

        return mapSizeToMinWidth[breakpoints.name];
    }

    return mixed;
};
