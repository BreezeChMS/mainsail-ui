import React, { useState, useEffect, useRef } from "react";

import { Modal } from "components/Modal";
import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";
import { Switcher, useSwitcher } from "components/Switcher";
import { ListGroup } from "components/ListGroup";
import { Icon } from "components/Icon";
import { Input } from "components/Input";
import { FormControl } from "components/FormControl";
import { FormLabel } from "components/FormLabel";

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
        <div id="app-body" className="bg-neutral-6 p-20">
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
                The size of the modal is defined by its body or optionally by
                supplying <code>bodyWidth</code> and <code>bodyHeight</code>{" "}
                props.
            </p>

            <p className="mb-20">
                This example has no page wrapper or state mangagement. Because
                of this, you can see the callbacks fire in the{" "}
                <strong>Actions</strong> tab.
            </p>
        </div>
    ),
};

export const ResponsiveHandling = (args) => <Modal {...args} />;
ResponsiveHandling.args = {
    isOpen: true,
    title: "Confirm",
    bodyWidth: ["100%", "500px", "700px"],
    isDismissable: false,
    onClickBack: null,
    children: (
        <div>
            <p className="mb-20">
                The width of the entire modal can be constraigned by{" "}
                <code>maxWidth</code>, however specific width and height can be
                controlled more directly via <code>bodyWidth</code> and{" "}
                <code>bodyHeight</code> props.
            </p>
            <p className="mb-20">
                A <strong>responsive array</strong> can be utilized here as
                well. See this Story control for <code>bodyWidth</code> as an
                example. Note: in order to maintain small screen support, supply
                either <code>null</code> or <code>100%</code> for the sm
                breakpoint.
            </p>
        </div>
    ),
};

export const WithListGroup = Template.bind({});
WithListGroup.args = {
    title: "Has No Content Padding",
    maxWidth: "600px",
    hasNoPadding: true,
    isDismissable: true,
    onClickBack: null,
    children: (
        <ListGroup>
            <ListGroup.Item
                icon={Icon.names.add}
                text="Add Person"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
            />
            <ListGroup.Item
                icon={Icon.names.people}
                text="Add Group"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
            />
            <ListGroup.Item
                icon={Icon.names.archive}
                text="Archive Group"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
            />
        </ListGroup>
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

export const FullScreenOnMobile = Template.bind({});
FullScreenOnMobile.args = {
    title: "Confirm",
    classNameFooter: "bg-neutral-6",
    confirmVariant: Button.variants.primary,
    isDismissable: true,
    onClickBack: null,
    isFullScreenMobile: true,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children: ScrollingContent.args.children,
};
FullScreenOnMobile.parameters = {
    docs: {
        description: {
            story:
                "Modals can be configured with `isFullScreenMobile` to fill the screen more when more content area is required on smaller screens.",
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

export const MultiStepBody = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
    const {
        currentView,
        nextAnim,
        previousAnim,
        previousView,
        setView,
    } = useSwitcher({
        nextAnim: "fade-slide-left",
        previousAnim: "fade-slide-right",
    });

    const ViewOne = () => (
        <div>
            <p className="body-text">
                <strong>View One</strong> - This is the first view of a
                multi-step modal. The footer is using the built-in buttons.
                Modal State managed outside the Modal component.
            </p>
        </div>
    );
    const ViewTwo = () => (
        <div>
            <p className="body-text">
                <strong>View Two</strong> - When this modal closes the state
                will not be reset until after the animation has finished. Reopen
                to see we are back at Step 1.
            </p>
        </div>
    );

    /**
     * What we want to happen when the close animation is done
     */
    const handleOnClose = () => {
        setView(1);
    };

    /**
     * Note: we could just as easily use a custom footer here, but
     * for example's sake we are going to use the default buttons
     */
    return (
        <div>
            <Modal
                {...args}
                hasNoPadding
                isFullScreenMobile
                isOpen={isModalOpen}
                onClickBack={currentView === 2 ? () => setView(1) : null}
                title={currentView === 1 ? "Step 1" : "Step 2"}
                confirmText={currentView === 1 ? "Next" : "Done"}
                onConfirm={
                    currentView === 1
                        ? () => setView(2)
                        : () => setIsModalOpen(false)
                }
                onClose={handleOnClose}
                onCancel={() => setIsModalOpen(false)}>
                <Switcher
                    isOverflowHiddenX
                    classNameChildren="p-20"
                    currentView={currentView}
                    previousView={previousView}
                    nextAnim={nextAnim}
                    previousAnim={previousAnim}>
                    <ViewOne />
                    <ViewTwo />
                </Switcher>
            </Modal>
            <Button
                className="mb-20"
                text="Open Modal"
                onClick={() => setIsModalOpen(true)}
            />
            <p>
                A Multi-step modal example. Uses <strong>Switcher</strong> on
                inner view components.
            </p>
            <p>
                NOTE: If transitioning inner view components, an explicit body
                height of modal <code>.mainsail-modal-body</code> is required.
            </p>
        </div>
    );
};
MultiStepBody.args = {
    bodyWidth: ["100%", "600px"],
    bodyHeight: ["100%", "250px"],
};
MultiStepBody.parameters = {
    docs: {
        description: {
            story:
                "A Multi-step modal example. Uses `<Switcher />` on inner view components.\nNOTE: If transitioning inner view components, an explicit body height of modal `.mainsail-modal-body` is required.",
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
                    <FormControl>
                        <FormLabel htmlFor="modal_input" text="Modal Input" />
                        <Input
                            style={{ display: "block", width: "300px" }}
                            className="mb-20 p-4 body-text"
                            type="text"
                            id="modal_input"
                            ref={openedFocusRef}
                            placeholder="When opened, I will have focus"
                        />
                    </FormControl>
                    <p className="mb-20">
                        On close, It will then pass focus back to{" "}
                        <code>onCloseFocusRef</code> if used.
                    </p>
                </div>
            </Modal>
            <FormLabel htmlFor="page_input">Page Input</FormLabel>
            <Input
                ref={closedFocusRef}
                style={{ display: "block", width: "300px" }}
                className="mb-20 p-4 body-text"
                type="text"
                id="page_input"
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
                "A modal can set focus on its body elements and also on DOM elements when it closes.",
        },
    },
};

export const CustomBackButton = Template.bind({});
CustomBackButton.args = {
    ...OverlayDismissable.args,
    backButton: (
        <Button
            onClick={() => {}}
            variant={Button.variants.tertiary}
            text="Nope"
        />
    ),
};
CustomBackButton.parameters = {
    docs: {
        description: {
            story:
                "A modal have a custom back button supplied in lieu of the default callback `onClickBack`",
        },
    },
};

export const MultipleModals = () => {
    const [isModalOneOpen, setIsModalOneOpen] = useState(false);
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);

    return (
        <div>
            <Button
                text="Open Modal 1"
                onClick={() => setIsModalOneOpen(true)}
            />
            <Modal
                isOpen={isModalOneOpen}
                bodyWidth={["100%", "800px"]}
                title="Is One Enough?"
                onCancel={() => setIsModalOneOpen(false)}
                onConfirm={() => setIsModalOneOpen(false)}>
                <p className="mb-20">
                    This story shows that you can call a modal open on top of
                    another open modal.
                </p>
                <p className="text-neutral-5 mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate porro debitis nesciunt expedita magnam quia in
                    atque possimus, aperiam commodi explicabo quod facilis?
                    Tempora omnis quae commodi nobis. Vel eaque doloribus quis
                    amet magni rem laboriosam unde. Et harum, non eum quos omnis
                    temporibus tempora explicabo ducimus sit quo iusto sint
                    quod! Magni perspiciatis consequuntur, itaque alias repellat
                    nesciunt rem velit ad tempora. At qui excepturi unde hic
                    assumenda tempore. Maiores totam ducimus eius? Doloribus,
                    aliquid modi ad quos iusto cumque delectus officia ea?
                    Veniam, similique necessitatibus voluptas eius ab placeat
                    voluptates maxime quod, alias pariatur, iusto libero
                    veritatis officiis. Tempora deleniti magni hic eaque nam
                    illum excepturi sapiente quidem animi ipsum alias iure at
                    placeat, minus tempore. Distinctio vitae natus asperiores
                    magni doloremque ad a officiis numquam, sed error, iste
                    quidem eveniet ipsa sint rerum asperiores architecto? Hic,
                    quae earum maxime quos itaque sequi eligendi fugiat quam
                    tenetur eum laboriosam ipsam reiciendis pariatur.
                </p>

                <Button
                    text="Open Modal 2"
                    onClick={() => setIsModalTwoOpen(true)}
                />
            </Modal>
            <Modal
                isDismissable
                isOpen={isModalTwoOpen}
                title="Moar Modals!"
                bodyWidth={["100%", "400px"]}
                onCancel={() => setIsModalTwoOpen(false)}
                onConfirm={() => setIsModalTwoOpen(false)}>
                <p>
                    This story shows that you can call a modal open on top of
                    another open modal.
                </p>
            </Modal>
        </div>
    );
};
