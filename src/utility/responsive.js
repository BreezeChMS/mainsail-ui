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
            sm: mixed[0] || "",
            md: mixed[1] || "",
            lg: mixed[2] || "",
        };

        return mapSizeToMinWidth[breakpoints.name];
    }

    return mixed;
};
