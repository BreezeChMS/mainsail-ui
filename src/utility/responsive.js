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
            sm: mixed[0],
            md: mixed[1],
            lg: mixed[2],
        };

        return mapSizeToMinWidth[breakpoints.name];
    }

    return mixed;
};

/**
 * generateColumnWidthStyle()
 * produces a style object for sizing columns based on responsive array breakpoints
 * This mainly exists because if "auto" is used, we want to incorporate width: 100%
 */
export const generateColumnWidthStyle = (
    breakpoint,
    { minWidth, maxWidth, width }
) => {
    let styles = {};
    let widthAtCurrentBreakpoint = convertFromResponsiveArray(
        breakpoint,
        width
    );
    let maxWidthAtCurrentBreakpoint = convertFromResponsiveArray(
        breakpoint,
        maxWidth
    );
    let minWidthAtCurrentBreakpoint = convertFromResponsiveArray(
        breakpoint,
        minWidth
    );

    if (widthAtCurrentBreakpoint) {
        styles.width = widthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            widthAtCurrentBreakpoint === "auto" ? "" : widthAtCurrentBreakpoint;
        styles.flexGrow = widthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = widthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    if (minWidthAtCurrentBreakpoint) {
        styles.minWidth = minWidthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            minWidthAtCurrentBreakpoint === "auto"
                ? ""
                : minWidthAtCurrentBreakpoint;
        styles.flexGrow = minWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = minWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    if (maxWidthAtCurrentBreakpoint) {
        styles.maxWidth = maxWidthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            maxWidthAtCurrentBreakpoint === "auto"
                ? ""
                : maxWidthAtCurrentBreakpoint;
        styles.flexGrow = maxWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = maxWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    return styles;
};
