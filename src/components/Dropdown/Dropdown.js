import React, {
    cloneElement,
    Children,
    useState,
    useEffect,
    useRef,
} from "react";
import { isFragment } from "react-is";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import { classify } from "utility/classify";
import { Icon } from "components/Icon";
import { useOnClickOutside, useKeydown } from "utility/hooks";
import {
    UP_ARROW_KEY_CODE,
    DOWN_ARROW_KEY_CODE,
    TAB_KEY_CODE,
    ESC_KEY_CODE,
} from "utility/constants";

import "./Dropdown.scss";

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

export const positionings = {
    fixed: "fixed",
    absolute: "absolute",
};

/**
 * A styled multiple choice alternative to a standard \<select\/> box. Uses popperjs behind the scenes.
 **/
export const Dropdown = ({
    className,
    customTrigger,
    options,
    value,
    modifiers = [],
    menuOffset,
    isNative,
    isDisabled,
    isRequired,
    onChange,
    placeholder,
    positioning,
    placement,
    hasCaret,
    ...props
}) => {
    const getSelectedOptionByValue = (opts, val) =>
        opts.find((o) => o.value == val);
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(
        getSelectedOptionByValue(options, value)
    );
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

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item, e) => {
        setSelected({ text: item.text, value: item.value });
        setIsOpen(false);
        onChange && onChange(item, e);
    };

    const handleNativeSelect = (e) => {
        let selectedOption = getSelectedOptionByValue(options, e.target.value);
        onChange && onChange(selectedOption, e);
    };

    useEffect(() => {
        setSelected(getSelectedOptionByValue(options, value));
    }, [value, options]);

    useOnClickOutside(dropdownRef, () => setIsOpen(false));

    useKeydown(
        (e) => {
            const focusableElements = "button.mainsail-dropdown__item";
            const SUPPORTED_KEYS = [
                TAB_KEY_CODE,
                ESC_KEY_CODE,
                UP_ARROW_KEY_CODE,
                DOWN_ARROW_KEY_CODE,
            ];
            let isEscPressed = e.keyCode === ESC_KEY_CODE;
            let isTabPressed = e.keyCode === TAB_KEY_CODE;
            let isArrowUpPressed = e.keyCode === UP_ARROW_KEY_CODE;
            let isArrowDownPressed = e.keyCode === DOWN_ARROW_KEY_CODE;

            if (!popperElement || !SUPPORTED_KEYS.includes(e.keyCode)) {
                return;
            }

            // Close on ESC
            if (isOpen && isEscPressed) {
                toggleOpen();
            }

            // Elements Accessible with Arrows
            const focusableMenuItems =
                dropdownRef.current &&
                dropdownRef.current.querySelectorAll(focusableElements);
            const firstFocusableEl =
                dropdownRef.current &&
                dropdownRef.current.querySelectorAll(focusableElements)[0];
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
        },
        [isOpen, popperElement]
    );

    // We can render this using native <select> for mobile or edge cases
    if (isNative) {
        return (
            <div className={classify("mainsail-dropdown", className)}>
                <select
                    role="listbox"
                    className={classify("ms-select")}
                    data-testid="dropdown-toggle"
                    onChange={handleNativeSelect}
                    disabled={isDisabled}
                    value={value}
                    required={isRequired}
                    placeholder={placeholder}
                    {...props}>
                    {placeholder ? (
                        <option value="-1" disabled>
                            {placeholder}
                        </option>
                    ) : null}
                    {options.map((item, index) => (
                        <option
                            key={`${index}_${item.value}`}
                            value={item.value}>
                            {item.text}
                        </option>
                    ))}
                </select>
                {hasCaret && (
                    <Icon
                        className="mainsail-dropdown__caret"
                        name={Icon.names.caret}
                        size={Icon.sizes.sm}
                        color={Icon.colors.dark}
                    />
                )}
            </div>
        );
    }

    // Provide necessary props/attributes to a custom trigger

    const childrenArray = isFragment(customTrigger)
        ? Children.toArray(customTrigger.props.children)
        : Children.toArray(customTrigger);

    let customTriggerChildren = childrenArray.map((child) => {
        return cloneElement(child, {
            ...child.props,
            tabIndex: 0,
            disabled: isDisabled,
            onClick: toggleOpen,
            className: classify(child.props.className, isOpen && "open active"),
        });
    });

    return (
        <div
            className={classify("mainsail-dropdown", className)}
            ref={dropdownRef}
            {...props}>
            {customTrigger ? (
                <span
                    className="mainsail-dropdown__custom-toggle"
                    ref={setReferenceElement}>
                    {customTriggerChildren}
                    {hasCaret && (
                        <Icon
                            className="mainsail-dropdown__caret"
                            isDisabled={isDisabled}
                            onClick={toggleOpen}
                            name={Icon.names.caret}
                            size={Icon.sizes.sm}
                            color={Icon.colors.dark}
                        />
                    )}
                </span>
            ) : (
                <button
                    className={classify(
                        "mainsail-dropdown__toggle",
                        isOpen && "open"
                    )}
                    type="button"
                    aria-haspopup={isOpen}
                    aria-expanded={isOpen}
                    ref={setReferenceElement}
                    tabIndex="0"
                    disabled={isDisabled}
                    onClick={toggleOpen}>
                    {selected && selected.text ? selected.text : placeholder}
                    {hasCaret && (
                        <Icon
                            className="mainsail-dropdown__caret"
                            isDisabled={isDisabled}
                            name={Icon.names.caret}
                            size={Icon.sizes.sm}
                            color={Icon.colors.dark}
                        />
                    )}
                </button>
            )}

            {isOpen ? (
                <div
                    role="listbox"
                    data-testid="dropdown-menu"
                    aria-expanded={isOpen ? "true" : "false"}
                    className={classify(
                        "mainsail-dropdown__menu",
                        className,
                        customTrigger && "custom-trigger"
                    )}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}>
                    {options.map(({ template, ...item }, index) => (
                        <button
                            key={`${index}_${item.value}`}
                            role="listitem"
                            aria-selected={
                                selected && selected.value === item.value
                            }
                            tabIndex="0"
                            onClick={(e) =>
                                !isDisabled && handleSelect(item, e)
                            }
                            className={classify(
                                "mainsail-dropdown__item",
                                selected &&
                                    selected.value === item.value &&
                                    "active"
                            )}>
                            {typeof template === "function"
                                ? template()
                                : item.text}
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

Dropdown.propTypes = {
    /** Custom triggering element */
    customTrigger: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.node,
    ]),
    /** Current selected value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Default text to display */
    placeholder: PropTypes.string,
    /** Array of dropdown menu choices must at a minimum contain keys `text` and `value`, optionally a `template` func can be supplied for custom component usage */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            template: PropTypes.func,
            meta: PropTypes.object,
        })
    ).isRequired,
    /** Controls whether to use custom styled dropdown or native select element (useful for mobile) */
    isNative: PropTypes.bool,
    /** Show/Hide the caret icon when using default dropdown */
    hasCaret: PropTypes.bool,
    /** Callback fired when a selection is made; recieves ({ ...optionData }, changeEvent) as args  */
    onChange: PropTypes.func,
    /** Marks the dropdown/select as required */
    isRequired: PropTypes.bool,
    /** Prevent visibility/functionality by passing a boolean */
    isDisabled: PropTypes.bool,
    /** Number of pixels to offset the dropdown menu */
    menuOffset: PropTypes.number,
    /** Position the dropdown menu */
    placement: PropTypes.oneOf(Object.values(placements)),
    /** Positioning strategy of the dropdown menu */
    positioning: PropTypes.oneOf(Object.values(positionings)),
    /** Exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning of dropdown menu. */
    modifiers: PropTypes.arrayOf(PropTypes.object),
    /** (Optional) click handler */
    onClick: PropTypes.func,
    /** Style class to add to component wrapper */
    className: PropTypes.string,
};

Dropdown.defaultProps = {
    options: [],
    placement: placements.bottomEnd,
    hasCaret: true,
    placeholder: "Select Option",
    menuOffset: 4,
    positioning: positionings.absolute,
};

Dropdown.placements = placements;
Dropdown.positionings = positionings;
Dropdown.displayName = "Dropdown";
