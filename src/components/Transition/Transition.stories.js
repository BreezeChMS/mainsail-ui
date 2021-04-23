import React from "react";

import { Transition } from "components/Transition";

const TestBlock = () => (
    <div
        className="bg-blue-dark rounded"
        style={{
            width: "100px",
            height: "100px",
        }}></div>
);

export default {
    title: "Animation/Transition",
    component: Transition,
    argTypes: {
        animation: {
            name: "animation",
            type: { animation: "string" },
            control: {
                type: "select",
            },
            options: Object.values(Transition.animations),
        },
    },
    parameters: {
        docs: {
            description: `
            * Animate components during mount/unmount
            `,
        },
    },
};

const Template = (args) => (
    <div>
        <p className="body-text md pb-8">
            Toggle <code>isActive</code> to see transition. Currently only works
            in Canvas view.
        </p>
        <Transition {...args}>
            <TestBlock />
        </Transition>
    </div>
);

export const Fade = Template.bind({});
Fade.args = {
    animation: Transition.animations.fade,
};

export const FadeAndScale = Template.bind({});
FadeAndScale.args = {
    animation: Transition.animations.fadeScale,
};

export const CustomAnimation = (args) => {
    return (
        <Transition {...args}>
            <TestBlock />
        </Transition>
    );
};
CustomAnimation.args = {
    className: "custom-anim",
    children: <div>This is a custom animation box</div>,
};
CustomAnimation.parameters = {
    docs: {
        page: null,
    },
};
