import React, { useState, useEffect, useRef } from "react";

import { Modal } from "components/Modal";
import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";

export default {
    title: "Overlay/Modal",
    component: Modal,
    argTypes: {},
};

let setModalTemplateOpen;

const Template = (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);
    const blurContent = useRef(null);

    // We need a handle on the state setter for other stories
    setModalTemplateOpen = setIsModalOpen;

    useEffect(() => {
        setIsModalOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <div id="app-body">
            <div className="body-text" ref={blurContent}>
                <Modal
                    isOpen={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    onConfirm={() => setIsModalOpen(false)}
                    intent={args.intent}
                    blurContentRef={blurContent}
                    hasOverlay={args.hasOverlay}
                    title={args.title}
                    isDismissable={args.isDismissable}
                    confirmText={args.confirmText}
                    cancelText={args.cancelText}
                    footer={args.footer}>
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

export const BasicConfirm = Template.bind({});
BasicConfirm.args = {
    title: "Confirm",
    isDismissable: false,
    onClickBack: null,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint expedita placeat, cupiditate pariatur ea ab recusandae.",
};

export const OverlayDismissable = Template.bind({});
OverlayDismissable.args = {
    title: "Confirm",
    isDismissable: true,
    onClickBack: null,
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
    children:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint expedita placeat, cupiditate pariatur ea ab recusandae.",
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
    children:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus perspiciatis quibusdam nemo id magnam, accusamus rerum a, saepe quis eum debitis amet consequatur, architecto repellat labore doloribus magni? Sed deserunt molestiae quia quaerat. Sint expedita placeat, cupiditate pariatur ea ab recusandae.",

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
        page: null,
    },
};

export const CustomButtonText = Template.bind({});
CustomButtonText.args = {
    onClickBack: null,
    title: "Get to Da Choppa",
    confirmText: "Do it naow!",
    cancelText: "Hasta La Vista",
    children:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, vitae.",
    onCancel: () => setModalTemplateOpen(false),
    onConfirm: () => setModalTemplateOpen(false),
};
CustomButtonText.parameters = {
    docs: {
        page: null,
    },
};
