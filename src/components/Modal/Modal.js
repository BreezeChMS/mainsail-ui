import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { WithPortal, useKeydown, useUniqueId } from "utility/hooks";
import { ESC_KEY_CODE, TAB_KEY_CODE } from "utility/constants";
import { Transition } from "components/Transition";

import "./Modal.scss";

export const intents = {
    default: "default",
    danger: "danger",
};

export const confirmVariants = {
    [Button.variants.primary]: Button.variants.primary,
    [Button.variants.secondary]: Button.variants.secondary,
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {};

/**
 * A dialog that can overlay a page or other modals, thus preventing interaction with content behind the modal.
 **/
export const Modal = ({
    isOpen,
    title,
    hasNoPadding,
    isFullScreenMobile,
    onClose,
    onClickBack,
    backButton,
    onConfirm,
    isLoading,
    confirmText,
    confirmVariant,
    loadingText,
    onCancel,
    cancelText,
    footer,
    intent,
    hasOverlay,
    isDismissable,
    blurContentRef,
    maxWidth,
    initialFocusRef,
    onCloseFocusRef,
    className,
    classNameFooter,
    children,
    ...props
}) => {
    const showBackButton = backButton || typeof onClickBack === "function";
    const [openClass, setOpenClass] = useState(isOpen ? "open" : "");
    const modalId = useUniqueId("modal");
    const modalRef = useRef(null);

    useKeydown((e) => {
        if (e.charCode === ESC_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
            handleDismiss();
        }
    });

    // Handle focus trap
    useKeydown((e) => {
        const focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        let isTabPressed = e.key === "Tab" || e.keyCode === TAB_KEY_CODE;

        if (!isTabPressed || !modalRef) {
            return;
        }

        const focusableContent =
            modalRef.current &&
            modalRef.current.querySelectorAll(focusableElements);
        const firstFocusableElement =
            modalRef.current &&
            modalRef.current.querySelectorAll(focusableElements)[0];
        const lastFocusableElement =
            focusableContent && focusableContent[focusableContent.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
        }
    });

    // Handle blurring of content
    useEffect(() => {
        if (!blurContentRef) {
            return;
        }
        let blurRef = blurContentRef.current;

        if (isOpen) {
            blurRef.classList.add("content-blur");
            document.body.classList.add("overflow-hidden");
        } else {
            blurRef.classList.remove("content-blur");
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen, blurContentRef]);

    useEffect(() => {
        if (isOpen && initialFocusRef) {
            initialFocusRef.current &&
                initialFocusRef.current.focus({ preventScroll: true });
        }
    }, [initialFocusRef, onCloseFocusRef, isOpen]);

    /**
     * We need to handle all dismisses
     * after the transition has finished (exited)
     */
    const handleDismiss = () => {
        onCancel && onCancel();
    };

    /**
     * We need to handle all confirms
     * after the transition has finished (exited)
     */
    const handleConfirm = () => {
        onConfirm && onConfirm();
    };

    /**
     * When animation is done, called by Transition exit
     */
    const handleOnClose = () => {
        setOpenClass("");
        onClose && onClose();

        onCloseFocusRef &&
            onCloseFocusRef.current &&
            onCloseFocusRef.current.focus();
    };

    return (
        <WithPortal id="mainsail-modal" className="mainsail-modal-container">
            <div
                className={classify("mainsail-modal", openClass, {
                    "mobile-fullscreen": isFullScreenMobile,
                })}
                {...props}>
                {hasOverlay === true ? (
                    <Transition
                        animation={Transition.animations.fade}
                        isActive={isOpen}>
                        <div
                            data-testid="modal-overlay"
                            className="mainsail-modal-overlay"
                            onClick={
                                isDismissable ? handleDismiss : () => {}
                            }></div>
                    </Transition>
                ) : null}
                <Transition
                    animation={Transition.animations.fadeScale}
                    isActive={isOpen}
                    onEnter={() => {
                        setOpenClass("open");
                    }}
                    onExited={handleOnClose}>
                    <div
                        ref={modalRef}
                        role="dialog"
                        aria-labelledby={`${modalId}-title`}
                        aria-describedby={`${modalId}-desc`}
                        className={classify(
                            "mainsail-modal-content",
                            intent,
                            className
                        )}
                        style={{ maxWidth, ...props.style }}>
                        <div
                            data-testid="modal-header"
                            className="mainsail-modal-header">
                            <div className="header-section">
                                {showBackButton ? (
                                    <Button
                                        onClick={onClickBack}
                                        variant={Button.variants.tertiary}
                                        iconLeft={Icon.names.back}
                                        text={
                                            <span className="sm:hidden">
                                                Back
                                            </span>
                                        }
                                    />
                                ) : null}
                            </div>
                            <div className="header-section">
                                <h2
                                    data-testid="modal-title"
                                    id={`${modalId}-title`}>
                                    {title}
                                </h2>
                            </div>
                            <div className="header-section">
                                <Button
                                    data-testid="modal-close"
                                    onClick={handleDismiss}
                                    variant={Button.variants.tertiary}
                                    icon={Icon.names.close}
                                />
                            </div>
                        </div>

                        <div
                            data-testid="modal-desc"
                            id={`${modalId}-desc`}
                            className={classify(
                                "mainsail-modal-body",
                                hasNoPadding && "no-padding"
                            )}>
                            {children}
                        </div>

                        <div
                            data-testid="modal-footer"
                            className={classify(
                                "mainsail-modal-footer",
                                classNameFooter
                            )}>
                            {footer ? (
                                footer
                            ) : (
                                <>
                                    <Button
                                        onClick={onCancel}
                                        variant={Button.variants.tertiary}
                                        text={
                                            cancelText ? cancelText : "Cancel"
                                        }
                                    />
                                    <Button
                                        onClick={handleConfirm}
                                        variant={
                                            intent === intents.danger
                                                ? Button.variants.primary
                                                : confirmVariant
                                        }
                                        intent={intent}
                                        text={
                                            confirmText
                                                ? confirmText
                                                : "Confirm"
                                        }
                                        isLoading={isLoading}
                                        loadingText={loadingText}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </Transition>
            </div>
        </WithPortal>
    );
};

Modal.propTypes = {
    /** Max width of the modal (height is calculated based on viewport) */
    maxWidth: PropTypes.string,
    /** Escape Hatch for modal content wrapper style */
    style: PropTypes.object,
    /** Style class to add to modal wrapper */
    className: PropTypes.string,
    /** Style class to add to footer wrapper (useful for applying a background color via utility class) */
    classNameFooter: PropTypes.string,
    /** The title text of the modal */
    title: PropTypes.string.isRequired,
    /** The confirm button variant of the modal (if using default footer)*/
    confirmVariant: PropTypes.oneOf(Object.keys(confirmVariants)),
    /** The confirm button text of the modal (if using default footer)*/
    confirmText: PropTypes.string,
    /** (Optional) confirm button text of the modal when in loading state (if using default footer)*/
    loadingText: PropTypes.string,
    /** Places the modal in a loading state for primary action button (if using default footer)*/
    isLoading: PropTypes.bool,
    /** Stretches the mobile body to fill the screen more on smaller screens */
    isFullScreenMobile: PropTypes.bool,
    /** The cancel button text of the modal (if using default footer)*/
    cancelText: PropTypes.string,
    /** Controls the visibility of the modal window */
    isOpen: PropTypes.bool,
    /** Callback fired when the modal back button is clicked */
    onClickBack: PropTypes.func,
    /** Optional custom back button (uses default if not supplied) */
    backButton: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    /** Callback fired when the default confirm button is clicked */
    onConfirm: PropTypes.func,
    /** Callback fired when the default cancel button is clicked */
    onCancel: PropTypes.func,
    /** Callback fired when the modal is fully closed or dismissed (animation is finished) */
    onClose: PropTypes.func,
    /** Controls the visibility of the modal overlay */
    hasOverlay: PropTypes.bool,
    /** Removes padding on the body content area */
    hasNoPadding: PropTypes.bool,
    /** Controls whether or not clicking the overlay can dismiss the modal */
    isDismissable: PropTypes.bool,
    /** An (optional) ref to apply a blur to while modal is open */
    blurContentRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    /** An (optional) ref to acquire the focus when modal opens */
    initialFocusRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    /** An (optional) ref to pass the focus back to when the modal closes */
    onCloseFocusRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    /** Component(s) to use as the footer of the modal */
    footer: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.func,
    ]),
    /** Provides Contextual intent styling of the modal */
    intent: PropTypes.oneOf(Object.keys(intents)),
};

Modal.defaultProps = {
    confirmVariant: Button.variants.secondary,
    isDismissable: false,
    intent: intents.default,
    hasOverlay: true,
    maxWidth: "500px",
    isFullScreenMobile: false,
};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * Modal.variants = variants
 */
Modal.intents = intents;
Modal.confirmVariants = confirmVariants;
