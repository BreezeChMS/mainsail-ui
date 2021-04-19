import React from "react";

import { Tooltip } from "./Tooltip";
import { Button } from "components/Button";

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

export const WithChildren = Template.bind({});
WithChildren.args = {
    placement: Tooltip.placements.bottom,
    text: "If you click, you'll regret it!",
    offset: 20,
    children: <Button text="Click" intent={Button.intents.danger} />,
};
WithChildren.parameters = {
    layout: "centered",
    docs: {
        description: {
            story: "Provides its own warning/info icon",
        },
    },
};
