import React, { useState, useEffect, useRef } from "react";

import { Modal } from "components/Modal";
import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";

export default {
    title: "Overlay/Modal",
    component: Modal,
    argTypes: {},
};

const Template = (args) => {
    const [isModalOpen, setModalOpen] = useState(args.isOpen);
    const blurContent = useRef(null);

    const handleClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        setModalOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <div id="app-body">
            <div className="body-text" ref={blurContent}>
                <Modal
                    isOpen={isModalOpen}
                    onCancel={handleClose}
                    onConfirm={handleClose}
                    intent={args.intent}
                    blurContentRef={blurContent}
                    hasOverlay={args.hasOverlay}
                    title={args.title}
                    isDismissable={args.isDismissable}
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

                <p className="mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quia dolorum magnam quasi perspiciatis explicabo
                    cumque iusto saepe quibusdam corrupti.
                </p>

                <p className="mb-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem dolor iste expedita quaerat ullam et quidem beatae
                    ipsa laudantium esse, totam, explicabo nulla harum velit
                    magnam culpa neque magni sapiente!
                </p>
                <Button onClick={() => setModalOpen(true)} text="Open Modal" />
            </div>
        </div>
    );
};

export const BasicConfirm = Template.bind({});
BasicConfirm.args = {
    title: "Confirm",
    isOpen: true,
    onClickBack: null,
    children:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint expedita placeat, cupiditate pariatur ea ab recusandae.",
};

export const DangerConfirm = Template.bind({});
DangerConfirm.args = {
    title: "Bulk Delete",
    isOpen: true,
    intent: Modal.intents.danger,
    onClickBack: null,
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
    isOpen: true,
    onClickBack: null,
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
            />
            <Button text="Let's Dance!" variant={Button.variants.primary} />
        </>
    ),
};
