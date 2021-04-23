import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classify } from "utility/classify";
import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { WithPortal, useKeydown, useUniqueId } from "utility/hooks";
import { Transition } from "components/Transition";

import "./Modal.scss";

export const intents = {
    default: "default",
    danger: "danger",
};

/**
 * @deprecated since version 7.0 - use directly attached ComponentName.<propNames>.value; e.g. Button.variants.secondary
 */
export const ENUMS = {};

/**
 * A dialog that can overlay a page or other modals, thus preventing interaction with content behind the modal.
 * Has subcomponents that aid in positioning and styling
 **/
export const Modal = ({
    isOpen,
    title,
    onClose,
    onClickBack,
    onConfirm,
    confirmText,
    onCancel,
    cancelText,
    footer,
    intent,
    hasOverlay,
    isDismissable,
    blurContentRef,
    // initialFocusRef,
    // onCloseFocusRef,
    className,
    children,
    ...props
}) => {
    const showBackButton = typeof onClickBack === "function";
    const [openClass, setOpenClass] = useState(isOpen ? "open" : "");
    const modalId = useUniqueId("modal");

    useKeydown((e) => {
        if (e.charCode === 27 || e.keyCode === 27) {
            handleDismiss();
        }
    });

    // Handle blurring of content
    useEffect(() => {
        if (!blurContentRef) {
            return null;
        }
        let blurRef = blurContentRef.current;

        if (isOpen) {
            blurRef.classList.add("content-blur");
        } else {
            blurRef.classList.remove("content-blur");
        }
    }, [isOpen, blurContentRef]);

    const handleDismiss = () => {
        onCancel && onCancel();
        onClose && onClose();
    };

    return (
        <WithPortal id="mainsail-modal" className="mainsail-modal-container">
            <div
                className={classify("mainsail-modal", className, openClass)}
                {...props}>
                {hasOverlay === true ? (
                    <Transition
                        animation={Transition.animations.fade}
                        isActive={isOpen}>
                        <div
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
                    onExited={() => {
                        setOpenClass("");
                    }}>
                    <div
                        role="dialog"
                        aria-labelledby={`${modalId}-title`}
                        aria-describedby={`${modalId}-desc`}
                        className={classify("mainsail-modal-content", intent)}>
                        <div className="mainsail-modal-header">
                            <div className="header-section">
                                {showBackButton ? (
                                    <Button
                                        className={"back-button"}
                                        onClick={onClickBack}
                                        variant={Button.variants.tertiary}
                                        iconLeft={Icon.names.back}
                                        text="Back"
                                    />
                                ) : null}
                            </div>
                            <div className="header-section">
                                <h2
                                    id={`${modalId}-title`}
                                    className="mainsail-modal-title m-0">
                                    {title}
                                </h2>
                            </div>
                            <div className="header-section">
                                <Button
                                    className={"close-button"}
                                    onClick={handleDismiss}
                                    variant={Button.variants.tertiary}
                                    icon={Icon.names.close}
                                />
                            </div>
                        </div>

                        <div
                            id={`${modalId}-desc`}
                            className="mainsail-modal-body">
                            {children}
                        </div>

                        <div className="mainsail-modal-footer">
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
                                        onClick={onConfirm}
                                        variant={
                                            intent === intents.danger
                                                ? Button.variants.primary
                                                : Button.variants.secondary
                                        }
                                        intent={intent}
                                        text={
                                            confirmText
                                                ? confirmText
                                                : "Confirm"
                                        }
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
    /** Style class to add to modal wrapper */
    className: PropTypes.string,
    /** The title text of the modal */
    title: PropTypes.string.isRequired,
    /** The confirm button text of the modal (if using default footer)*/
    confirmText: PropTypes.string,
    /** The cancel button text of the modal (if using default footer)*/
    cancelText: PropTypes.string,
    /** Controls the visibility of the modal window */
    isOpen: PropTypes.bool,
    /** Callback fired when the modal back button is clicked */
    onClickBack: PropTypes.func,
    /** Callback fired when the default confirm button is clicked */
    onConfirm: PropTypes.func,
    /** Callback fired when the default cancel button is clicked */
    onCancel: PropTypes.func,
    /** Callback fired when the modal is closed or dismissed */
    onClose: PropTypes.func,
    /** Controls the visibility of the modal overlay */
    hasOverlay: PropTypes.bool,
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
    isDismissable: false,
    intent: intents.default,
    onClickBack: null,
    hasOverlay: true,
};

/*
 * Tip: Be sure to attach any prop enums separately for convenience
 * use the plural form of the prop name
 * Modal.variants = variants
 */
Modal.intents = intents;
