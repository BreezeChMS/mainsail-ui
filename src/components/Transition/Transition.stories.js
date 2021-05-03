import React from "react";

import { Transition } from "components/Transition";

const CUSTOM_ANIM_CSS = `
.custom-anim-enter {
    opacity: 0;
    transform: translateX(-50%);
}
.custom-anim-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 300ms, transform 300ms;
}
.custom-anim-exit {
    opacity: 1;
}
.custom-anim-exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: opacity 300ms, transform 300ms;
}
.custom-anim-exit-done {
    opacity: 0;
    transform: translateX(0%);
}
`;

const TestBlock = (props) => (
    <div
        className="bg-blue-dark rounded"
        style={{
            width: "100px",
            height: "100px",
        }}
        {...props}></div>
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
            Toggle <code>isActive</code> and set{" "}
            <code>shouldAnimateOnMount</code> to see transition.
        </p>
        <Transition {...args}>
            <TestBlock data-testid="animated-block" />
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

export const FadeAndSlideInDown = Template.bind({});
FadeAndSlideInDown.args = {
    animation: Transition.animations.fadeSlideDown,
};

export const FadeAndSlideInRight = Template.bind({});
FadeAndSlideInRight.args = {
    animation: Transition.animations.fadeSlideRight,
};

export const FadeAndSlideInLeft = Template.bind({});
FadeAndSlideInLeft.args = {
    animation: Transition.animations.fadeSlideLeft,
};

export const Custom = (args) => {
    return (
        <>
            <p className="body-text">
                <strong>
                    This custom In/Out animation travels in one way in then out
                    another!
                </strong>{" "}
                The css (shown below) is applied in our storybook head style
                tag.
            </p>
            <p className="body-text">
                Toggle the <code>isActive</code> control to see the animation in
                action while on the Canvas view.
            </p>

            <Transition {...args}>
                <TestBlock />
            </Transition>
            <pre>{CUSTOM_ANIM_CSS}</pre>
        </>
    );
};
Custom.args = {
    className: "custom-anim",
};
Custom.parameters = {
    docs: {
        page: null,
    },
};
