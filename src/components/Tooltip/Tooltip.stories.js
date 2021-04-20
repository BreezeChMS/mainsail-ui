import React from "react";

import { Tooltip } from "./Tooltip";
import { Button } from "components/Button";
import { Icon } from "components/Icon";

export default {
    title: "Overlay/Tooltip",
    component: Tooltip,
    argTypes: {},
};

const Template = (args) => <Tooltip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    placement: Tooltip.placements.bottom,
    text: "Here are some words that will give more information to the user!",
};
Simple.parameters = {
    layout: "centered",
    docs: {
        description: {
            story: "Provides its own warning/info icon",
        },
    },
};

export const TipTop = Template.bind({});
TipTop.args = {
    placement: Tooltip.placements.top,
    text: "This text helps alot up top!",
    isVisible: true,
};
TipTop.parameters = {
    layout: "centered",
};

export const TipBottom = Template.bind({});
TipBottom.args = {
    placement: Tooltip.placements.bottom,
    text: "This text helps from below!",
    isVisible: true,
};
TipBottom.parameters = {
    layout: "centered",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    placement: Tooltip.placements.bottom,
    text: "If you click, you'll edit it!",
    offset: 20,
    children: (
        <Button
            variant={Button.variants.icon}
            icon={Icon.names.edit}
            onClick={() => alert("How dare you!")}
        />
    ),
};
WithChildren.parameters = {
    layout: "centered",
    docs: {
        description: {
            story: "Can wrap any component to provide a tooltip",
        },
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    placement: Tooltip.placements.bottom,
    text: "I'm so sad you don't get to see this epic tip!",
    offset: 20,
    isDisabled: true,
    children: (
        <Button
            variant={Button.variants.secondary}
            text="Disabled"
            isDisabled
            onClick={() => alert("How dare you!")}
        />
    ),
};
Disabled.parameters = {
    layout: "centered",
    docs: {
        description: {
            story:
                "If you need to override the hover visibility on a child when the child is disabled, this can help.",
        },
    },
};

export const WithCustomModifiers = (args) => {
    return (
        <div>
            <div
                id="boundary"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "1px dashed tomato",
                    width: "300px",
                    height: "300px",
                    overflow: "hidden",
                    padding: "30px",
                }}>
                <Simple text={args.text} {...args} />
                <span className="body-text">
                    This box is set up to display overflow avoidance in a case
                    where we cannot determine the placement position concretely.
                    Try adjusting the modifiers below.
                </span>
            </div>
        </div>
    );
};

WithCustomModifiers.args = {
    text: "This text would overflow the parent without the modifiers.",
    modifiers: [
        {
            name: "preventOverflow",
            options: {
                altBoundary: true,
            },
        },
    ],
    isVisible: true,
};

WithCustomModifiers.parameters = {
    layout: "centered",
    docs: {
        description: {
            story:
                "The `modifiers` prop exposes a [Popperjs](https://popper.js.org/docs/v2/modifiers) api that enables further fine-tuning.",
        },
    },
};
