import React, { useState } from "react";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import { classify } from "utility/classify";

import "./Tooltip.scss";

const getOffset = (placement, offset = 8) => {
    let DIST = offset;
    const DEFAULT_OFFSET = [0, DIST];
    const offsetMap = {
        top: [0, DIST],
        "top-start": [-DIST, DIST],
        "top-end": [DIST, DIST],
        left: [0, DIST],
        "left-start": [-DIST, DIST],
        "left-end": [DIST, DIST],
        right: [0, DIST],
        "right-start": [-DIST, DIST],
        "right-end": [DIST, DIST],
        bottom: [0, DIST],
        "bottom-start": [-DIST, DIST],
        "bottom-end": [DIST, DIST],
    };

    return offsetMap[placement] || DEFAULT_OFFSET;
};

export const placements = {
    auto: "auto",
    top: "top",
    topStart: "top-start",
    topEnd: "top-end",
    left: "left",
    leftStart: "left-start",
    leftEnd: "left-end",
    right: "right",
    rightStart: "right-start",
    rightEnd: "right-end",
    bottom: "bottom",
    bottomStart: "bottom-start",
    bottomEnd: "bottom-end",
};

/**
 * @deprecated since version 7.0 - Instead, use enums directly off of the imported component; e.g. Button.variants.secondary
 */
export const ENUMS = {
    placements,
};

/**
 * A wrapper for a component that provides a Popperjs-driven tooltip
 **/
export const Tooltip = ({
    className,
    children,
    text,
    offset,
    modifiers = [],
    placement,
    isVisible,
    isDisabled,
}) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [visible, setVisibility] = useState(false);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            {
                name: "offset",
                enabled: true,
                options: {
                    offset: getOffset(placement, offset),
                },
            },
            ...modifiers,
        ],
    });

    function handleHover(e) {
        setVisibility(e.type === "mouseover" ? true : false);
    }

    let isOpen = (isVisible || visible) && !isDisabled;

    return (
        <>
            {children ? (
                <span
                    ref={setReferenceElement}
                    onMouseOut={handleHover}
                    onMouseOver={handleHover}>
                    {children}
                </span>
            ) : (
                <svg
                    role="img"
                    data-testid="tip-icon"
                    className="tip-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    ref={setReferenceElement}
                    onMouseOut={handleHover}
                    onMouseOver={handleHover}
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="6"
                        cy="6"
                        r="5.5"
                        fill="#E3F2FA"
                        stroke="#003462"
                    />
                    <path
                        d="M6.05922 3.29971L6.00432 3.29866C5.95726 3.29324 5.91236 3.27129 5.87662 3.23331L5.87666 3.23327L5.87134 3.22779C5.77595 3.12951 5.77597 2.97044 5.87133 2.8722L5.8714 2.87227L5.87816 2.86502C5.91859 2.82168 5.97506 2.79825 6.03395 2.80009L6.04658 2.80048L6.05922 2.80024C6.11965 2.79908 6.17853 2.82254 6.22286 2.86723L6.22274 2.86735L6.23241 2.8766C6.27649 2.91871 6.30091 2.97738 6.29977 3.03802L6.29962 3.04585L6.29972 3.05368C6.30055 3.12054 6.27452 3.17932 6.23242 3.21954L6.22595 3.22572L6.21971 3.23212C6.17561 3.27738 6.11631 3.30081 6.05922 3.29971Z"
                        fill="#003462"
                        stroke="#003462"
                    />
                    <path
                        d="M6.19303 8.4806L6.19303 8.74052H6.00658V8.48059V5.42686V5.16693H6.19301L6.19303 8.4806Z"
                        fill="#003462"
                        stroke="#003462"
                    />
                </svg>
            )}

            {isOpen ? (
                <div
                    data-testid="tooltip"
                    aria-hidden={isOpen ? "true" : "false"}
                    className={classify("mainsail-tooltip", className)}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}>
                    {text}
                    <div
                        className={classify("tip-arrow", placement)}
                        ref={setArrowElement}
                        style={styles.arrow}
                    />
                </div>
            ) : null}
        </>
    );
};

Tooltip.propTypes = {
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning. */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** Offset distance from trigger element to tooltip */
    offset: PropTypes.number,
    /** Location relative to the tip item to display tooltip */
    placement: PropTypes.oneOf(Object.values(placements)),
    /** Text to display on tooltip */
    text: PropTypes.string.isRequired,
    /** Style class to add to Icon wrapper */
    className: PropTypes.string,
    /** Show and hide the tip programmatically */
    isVisible: PropTypes.bool,
    /** Prevent visibility/functionality by passing a boolean */
    isDisabled: PropTypes.bool,
};

Tooltip.defaultProps = {
    placement: placements.bottom,
    offset: 8,
};

Tooltip.placements = placements;
