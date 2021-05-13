/**
 * convertFromResponsiveArray()
 * provides a conversion from a responsive array example ["90px", "120px", ""] to the current breakpoint value
 * @param {*} breakpoints
 * @param {*} mixed
 * @returns
 */

export const convertFromResponsiveArray = (breakpoints, mixed) => {
    if (Array.isArray(mixed)) {
        let sizeToIndex = {
            sm: 0,
            md: 1,
            lg: 2,
        };
        let curIndex = sizeToIndex[breakpoints.name];

        while (!mixed[curIndex]) {
            curIndex--;
        }

        return mixed[curIndex];
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

    if (!width && minWidthAtCurrentBreakpoint) {
        styles.minWidth = minWidthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            minWidthAtCurrentBreakpoint === "auto"
                ? ""
                : minWidthAtCurrentBreakpoint;
        styles.flexGrow = minWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = minWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    if (!width && maxWidthAtCurrentBreakpoint) {
        styles.maxWidth = maxWidthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            maxWidthAtCurrentBreakpoint === "auto"
                ? ""
                : maxWidthAtCurrentBreakpoint;
        styles.flexGrow = maxWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = maxWidthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    // Explicit width should supercede all
    if (widthAtCurrentBreakpoint) {
        styles.width = widthAtCurrentBreakpoint === "auto" ? "100%" : "";
        styles.flexBasis =
            widthAtCurrentBreakpoint === "auto" ? "" : widthAtCurrentBreakpoint;
        styles.flexGrow = widthAtCurrentBreakpoint === "auto" ? 1 : 0;
        styles.flexShrink = widthAtCurrentBreakpoint === "auto" ? 1 : 0;
    }

    return styles;
};
