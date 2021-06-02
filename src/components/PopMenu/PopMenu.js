import React, { cloneElement, Children, useRef, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { isFragment } from "react-is";
import { usePopper } from "react-popper";
import { useOnClickOutside, useKeydown } from "utility/hooks";
import {
    UP_ARROW_KEY_CODE,
    DOWN_ARROW_KEY_CODE,
    TAB_KEY_CODE,
    ESC_KEY_CODE,
    ENTER_KEY_CODE,
    SPACE_KEY_CODES,
} from "utility/constants";
import { Icon } from "components/Icon";

import "./PopMenu.scss";

export const variants = {
    borderless: "borderless",
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

export const colors = {
    default: "default",
    dark: "dark",
};

export const positionings = {
    fixed: "fixed",
    absolute: "absolute",
};

/**
 * A pop-up menu that offers choice to users upon click, can be triggerd on any clickable component (if you need actual dropdown functionality see Forms > Dropdown component)
 **/
export const PopMenu = ({
    className,
    placement,
    positioning,
    modifiers,
    hasPadding,
    menuOffset,
    children,
    trigger,
    ...props
}) => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement,
        strategy: positioning,
        modifiers: [
            {
                name: "offset",
                enabled: true,
                options: {
                    offset: [0, menuOffset],
                },
            },
            ...modifiers,
        ],
    });

    useOnClickOutside(menuRef, () => setIsOpen(false));

    useKeydown(
        (e) => {
            const focusableElements = "button.mainsail-pop-menu__item";
            const SUPPORTED_KEYS = [
                TAB_KEY_CODE,
                ESC_KEY_CODE,
                UP_ARROW_KEY_CODE,
                DOWN_ARROW_KEY_CODE,
                SPACE_KEY_CODES[0],
                SPACE_KEY_CODES[1],
                ENTER_KEY_CODE,
            ];
            let isEscPressed = e.keyCode === ESC_KEY_CODE;
            let isTabPressed = e.keyCode === TAB_KEY_CODE;
            let isArrowUpPressed = e.keyCode === UP_ARROW_KEY_CODE;
            let isArrowDownPressed = e.keyCode === DOWN_ARROW_KEY_CODE;
            let isSubmitted =
                e.keyCode === ENTER_KEY_CODE ||
                SPACE_KEY_CODES.includes(e.keyCode);

            if (!popperElement || !SUPPORTED_KEYS.includes(e.keyCode)) {
                return;
            }

            // Close on ESC
            if (isOpen && isEscPressed) {
                setIsOpen(!isOpen);
            }

            // Elements Accessible with Arrows
            const focusableMenuItems =
                menuRef.current &&
                menuRef.current.querySelectorAll(focusableElements);
            const firstFocusableEl =
                menuRef.current &&
                menuRef.current.querySelectorAll(focusableElements)[0];
            const lastFocusableEl =
                focusableMenuItems &&
                focusableMenuItems[focusableMenuItems.length - 1];

            let activeChoice = document.activeElement;
            let currentActiveIndex = -1;

            // Determine current focus index in NodeList
            focusableMenuItems.forEach((choice, idx) => {
                if (choice === activeChoice) {
                    currentActiveIndex = idx;
                }
            });

            if (isArrowDownPressed || isTabPressed) {
                if (activeChoice === lastFocusableEl) {
                    firstFocusableEl.focus();
                } else {
                    focusableMenuItems.item(currentActiveIndex + 1).focus();
                }
                e.preventDefault();
            }

            if (isArrowUpPressed || (isTabPressed && e.shiftKey)) {
                if (activeChoice === firstFocusableEl) {
                    lastFocusableEl.focus();
                } else {
                    focusableMenuItems.item(currentActiveIndex - 1).focus();
                }
                e.preventDefault();
            }

            if (isSubmitted) {
                activeChoice.click();
                setIsOpen(false);
            }
        },
        [isOpen, popperElement]
    );

    const childrenArray = isFragment(trigger)
        ? Children.toArray(trigger.props.children)
        : Children.toArray(trigger);

    let triggerChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            tabIndex: 0,
            onClick: () => setIsOpen(!isOpen),
            className: classify(child.props.className, isOpen && "open active"),
        });
    });

    return (
        <div
            ref={menuRef}
            className={classify("mainsail-pop-menu", className)}
            {...props}>
            <span
                className="mainsail-pop-menu__toggle"
                ref={setReferenceElement}>
                {triggerChildren}
            </span>

            {isOpen ? (
                <div
                    role="menu"
                    data-testid="pop-menu"
                    aria-expanded={isOpen ? "true" : "false"}
                    className={classify(
                        "mainsail-pop-menu__menu",
                        { "py-6": hasPadding },
                        className
                    )}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}>
                    {children}
                </div>
            ) : null}
        </div>
    );
};

PopMenu.propTypes = {
    /** Defines the PopMenu with top and bottom padding (before first option, after last option) */
    hasPadding: PropTypes.bool,
    /** Number of pixels to offset the pop menu */
    menuOffset: PropTypes.number,
    /** Position the pop menu */
    placement: PropTypes.oneOf(Object.values(placements)),
    /** Positioning strategy of the pop menu */
    positioning: PropTypes.oneOf(Object.values(positionings)),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning of pop menu. */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** The element that must be clicked to display the PopMenu */
    trigger: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.node,
    ]).isRequired,
    /** Controls overall visual appearance */
    variant: PropTypes.oneOf(Object.values(variants)),
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Style class to add to pop menu list */
    className: PropTypes.string,
};

PopMenu.defaultProps = {
    variant: variants.borderless,
    placement: placements.bottomEnd,
    modifiers: [],
    positioning: positionings.fixed,
    menuOffset: 20,
};

export const PopMenuItem = ({
    className,
    icon,
    isHeader,
    color,
    onClick,
    text,
    children,
}) => {
    if (isHeader) {
        return (
            <h5 className="mainsail-pop-menu__header">
                {text}
                {children}
            </h5>
        );
    }

    return (
        <button
            type="button"
            role="menuitem"
            tabIndex="0"
            onClick={onClick}
            className={classify("mainsail-pop-menu__item", color, className)}>
            {icon ? <Icon name={icon} /> : null}
            {text}
            {children}
        </button>
    );
};

PopMenuItem.propTypes = {
    /** Define the color of the text of the Menu Items */
    color: PropTypes.oneOf(Object.values(colors)),
    /** Define a PopMenu.Item as header label text (not clickable) */
    isHeader: PropTypes.bool,
    /** Optional text to display as menu item (used in lieu of passing children) */
    text: PropTypes.string,
    /** Optional icon to display as button icon */
    icon: PropTypes.oneOf(Object.values(Icon.names)),
    /** Optional callback to fire when menu item is clicked */
    onClick: PropTypes.func,
    /** Optional classes to provide to menu item */
    className: PropTypes.string,
};

PopMenuItem.defaultProps = {
    color: colors.default,
};

PopMenuItem.iconNames = Icon.names;
PopMenuItem.colors = colors;
PopMenu.Item = PopMenuItem;

PopMenu.displayName = "PopMenu";
PopMenu.variants = variants;
PopMenu.positionings = positionings;
PopMenu.placements = placements;
