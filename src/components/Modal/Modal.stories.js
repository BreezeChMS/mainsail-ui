import React, { useState, useEffect, useRef } from "react";

import { Modal } from "components/Modal";
import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";
import { Transition } from "components/Transition";

export default {
    title: "Overlay/Modal",
    component: Modal,
    argTypes: {
        confirmVariant: {
            name: "confirmVariant",
            type: { confirmVariant: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(Modal.confirmVariants),
        },
    },
    parameters: {
        controls: { sort: "requiredFirst" },
    },
};

let setModalTemplateOpen;

/**
 * Template is a state-ful wrapper around the Modal component
 */
const Template = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
    const [isLoading, setIsLoading] = useState(false);
    const blurContent = useRef(null);

    // We need a handle on the state setter for other stories
    setModalTemplateOpen = setIsModalOpen;

    useEffect(() => {
        setIsModalOpen(args.isOpen);
    }, [args.isOpen]);

    useEffect(() => {
        let timeout;

        if (isLoading) {
            timeout = setTimeout(() => {
                setIsLoading(false);
                args.onConfirm && args.onConfirm();
            }, 3500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [isLoading, args]);

    const handleOnCancel = () => {
        setIsModalOpen(false);
        args.onCancel && args.onCancel();
    };

    const handleOnConfirm = () => {
        // If not using loading text, we assume we can close
        if (!args.loadingText) {
            setIsModalOpen(false);
            args.onConfirm && args.onConfirm();
        } else {
            // If using loading text, we defer closing to useEffect ☝️
            setIsLoading(true);
        }
    };

    return (
        <div id="app-body">
            <div className="body-text" ref={blurContent}>
                <Modal
                    {...args}
                    isOpen={isModalOpen}
                    onCancel={handleOnCancel}
                    onConfirm={handleOnConfirm}
                    blurContentRef={blurContent}
                    isLoading={args.isLoading || isLoading}>
                    {args.children}
                </Modal>
                <h2>A Pretend Page</h2>
                <p className="mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, corrupti provident itaque modi nulla
                    doloremque soluta voluptatibus dolor, nobis excepturi sit
                    adipisci natus. Nihil voluptatem quam eius nisi neque
                    incidunt labore ut illo officiis assumenda autem eos aliquam
                    laborum rem tenetur dicta eveniet, corrupti alias.
                    Dignissimos, odit animi? Sit esse eum vero harum molestiae
                    libero consequatur optio ratione, laudantium labore deleniti
                    totam iste corrupti mollitia? Nemo eveniet accusamus
                    reprehenderit aliquid, tempore quas quidem vitae omnis. Sed
                    sit quae
                </p>

                <p className="mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem dolor iste expedita quaerat ullam et quidem beatae
                    ipsa laudantium esse, totam, explicabo nulla harum velit
                    magnam culpa neque magni sapiente!
                </p>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    text="Open Modal"
                />
            </div>
        </div>
    );
};

export const BasicConfirm = (args) => <Modal {...args} />;
BasicConfirm.args = {
    isOpen: true,
    title: "Confirm",
    maxWidth: "600px",
    isDismissable: false,
    onClickBack: null,
    children: (
        <div>
            <p className="mb-20">
                The size of the modal is defined by its content or the{" "}
                <code>maxWidth</code> prop.
                <br /> Modal height and padding is handled for you. If you need
                to force height, style your content accordingly.
            </p>

            <p className="mb-20">
                This example has no page wrapper or state mangagement. Because
                of this, you can see the callbacks fire in the{" "}
                <strong>Actions</strong> tab.
            </p>
        </div>
    ),
};

export const ScrollingContent = Template.bind({});
ScrollingContent.args = {
    title: "Confirm",
    isDismissable: false,
    onClickBack: null,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children: (
        <div>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, corrupti provident itaque modi nulla doloremque
                soluta voluptatibus dolor, nobis excepturi sit adipisci natus.
                Nihil voluptatem quam eius nisi neque incidunt labore ut illo
                officiis assumenda autem eos aliquam laborum rem tenetur dicta
                eveniet, corrupti alias. Dignissimos, odit animi? Sit esse eum
                vero harum molestiae libero consequatur optio ratione,
                laudantium labore deleniti totam iste corrupti mollitia? Nemo
                eveniet accusamus reprehenderit aliquid, tempore quas quidem
                vitae omnis. Sed sit quae
            </p>

            <p className="mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolor iste expedita quaerat ullam et quidem beatae ipsa
                laudantium esse, totam, explicabo nulla harum velit magnam culpa
                neque magni sapiente!
            </p>
        </div>
    ),
};
ScrollingContent.parameters = {
    docs: {
        description: {
            story:
                "If the modal body content is too tall, it will produce vertical scroll bars.",
        },
    },
};

export const OverlayDismissable = Template.bind({});
OverlayDismissable.args = {
    title: "Confirm",
    isDismissable: true,
    onClickBack: null,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children: "This modal is dismissable by clicking the overlay behind it.",
};
OverlayDismissable.parameters = {
    docs: {
        description: {
            story: "Can be configured to allow clicking the overlay to dismiss",
        },
    },
};

export const DangerIntent = Template.bind({});
DangerIntent.args = {
    maxWidth: "500px",
    title: "Bulk Delete",
    intent: Modal.intents.danger,
    onClickBack: null,
    isDismissable: false,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children: (
        <div className="modal-wrapper__body-text">
            Deleting people will remove them and all of their information from
            Breeze. This action can be undone for 30 days.
            <br />
            <br />
            <strong>
                Contributions records for these people will be marked as
                anonymous.
            </strong>{" "}
            In total, this 1 person has 0 giving records.
        </div>
    ),
};

export const WithCustomFooter = Template.bind({});
WithCustomFooter.args = {
    title: "Fancy Footwork",
    onClickBack: null,
    isDismissable: false,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children: (
        <div>
            <p>
                This modal has a completely custom footer. The buttons and
                checkbox are passed in via the <code>footer</code> prop.
            </p>
        </div>
    ),
    footer: (
        <>
            <div style={{ marginRight: "auto" }}>
                <Checkbox text="Keep on" />
            </div>
            <Button
                text="I'd rather not..."
                variant={Button.variants.tertiary}
                onClick={() => setModalTemplateOpen(false)}
            />
            <Button
                text="Let's Dance!"
                variant={Button.variants.primary}
                onClick={() => setModalTemplateOpen(false)}
            />
        </>
    ),
};
WithCustomFooter.parameters = {
    docs: {
        description: {
            story:
                "A modal can include an entirely custom footer. Code may be better viewed in the `src` file due to this _Show code_ option inlining the `footer` prop.",
        },
    },
};

export const CustomButtonText = Template.bind({});
CustomButtonText.args = {
    onClickBack: null,
    title: "Get to Da Choppa",
    confirmText: "Do it naow!",
    cancelText: "Hasta La Vista",
    children: (
        <div>
            <p>
                The default buttons can be used along with custom text for both{" "}
                <code>confirmText</code> and <code>cancelText</code>.
            </p>
        </div>
    ),
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
};

export const LoadingState = Template.bind({});
LoadingState.args = {
    onClickBack: null,
    title: "Confirm",
    confirmText: "Submit",
    loadingText: "Submitting",
    cancelText: "Cancel",
    children: (
        <div>
            <p className="mb-20">
                Loading states may be indicated on default footer buttons by
                using
                <code>loadingText</code> and <code>isLoading</code> props.
            </p>
            <p className="mb-20">
                Hit <strong>Submit</strong> to see it!
            </p>
        </div>
    ),
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
};

export const MutiStepBody = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
    const [currentView, setCurrentView] = useState(1);

    const ViewOne = () => (
        <div
            style={{
                position: "absolute",
                top: "0px",
                left: "0px",
            }}>
            <p className="body-text">
                View One - This is the first view of a multi-step modal. The
                footer is using the built-in buttons. Modal State managed
                outside the Modal component.
            </p>
        </div>
    );
    const ViewTwo = () => (
        <div
            style={{
                position: "absolute",
                top: "0px",
                left: "0px",
            }}>
            <p className="body-text">
                View Two - When this modal closes the state will not be reset
                until after the animation has finished. Reopen to see we are
                back at Step 1.
            </p>
        </div>
    );

    /**
     * What we want to happen when the close animation is done
     */
    const handleOnClose = () => {
        setCurrentView(1);
    };

    /**
     * Note: we could just as easily use a custom footer here, but
     * for example's sake we are going to use the default buttons
     */
    return (
        <div>
            <Modal
                {...args}
                isOpen={isModalOpen}
                onClickBack={currentView === 2 ? () => setCurrentView(1) : null}
                title={currentView === 1 ? "Step 1" : "Step 2"}
                confirmText={currentView === 1 ? "Next" : "Done"}
                onConfirm={
                    currentView === 1
                        ? () => setCurrentView(2)
                        : () => setIsModalOpen(false)
                }
                onClose={handleOnClose}
                onCancel={() => setIsModalOpen(false)}>
                <div style={{ position: "relative" }}>
                    <Transition
                        animation={Transition.animations.fadeSlideRight}
                        isActive={currentView === 1}>
                        <ViewOne />
                    </Transition>
                    <Transition
                        animation={Transition.animations.fadeSlideLeft}
                        isActive={currentView === 2}>
                        <ViewTwo />
                    </Transition>
                </div>
            </Modal>
            <Button text="Open Modal" onClick={() => setIsModalOpen(true)} />
        </div>
    );
};

MutiStepBody.parameters = {
    docs: {
        description: {
            story:
                "A Multi-step modal example. Uses `<Transition />` on inner view components.\nNOTE: If transitioning inner view components, absolute position may be necessary allow child view stacking in the DOM. `<ViewOne/>` and `<ViewTwo/` are absolutely positioned in the following example.",
        },
    },
};

export const FocusHandling = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
    const openedFocusRef = useRef(null);
    const closedFocusRef = useRef(null);
    const blurRef = useRef(null);

    return (
        <div className="body-text" ref={blurRef}>
            <Modal
                isOpen={isModalOpen}
                title="Handle Focus"
                onClickBack={null}
                blurContentRef={blurRef}
                initialFocusRef={openedFocusRef}
                onCloseFocusRef={closedFocusRef}
                isDismissable={false}
                onCancel={() => setIsModalOpen(false)}
                onConfirm={() => setIsModalOpen(false)}>
                <div>
                    <p className="mb-20">
                        This modal will apply focus to the{" "}
                        <code>initialFocusRef</code> element if that prop is
                        used.
                    </p>
                    <label htmlFor="modal_input">Modal Input</label>
                    <input
                        style={{ display: "block", width: "300px" }}
                        className="mb-20 p-4 body-text"
                        type="text"
                        id="modal_input"
                        ref={openedFocusRef}
                        placeholder="When opened, I will have focus"
                    />
                    <p className="mb-20">
                        On close, It will then pass focus back to{" "}
                        <code>onCloseFocusRef</code> if used.
                    </p>
                </div>
            </Modal>
            <label htmlFor="page_input">Page Input</label>
            <input
                style={{ display: "block", width: "300px" }}
                className="mb-20 p-4 body-text"
                type="text"
                id="page_input"
                ref={closedFocusRef}
                placeholder="After modal is closed, I will have focus"
            />
            <Button text="Open Modal" onClick={() => setIsModalOpen(true)} />
        </div>
    );
};

FocusHandling.parameters = {
    docs: {
        description: {
            story:
                "A modal can include an entirely custom footer. Code may be better viewed in the `src` file due to this _Show code_ option inlining the `footer` prop.",
        },
    },
};
