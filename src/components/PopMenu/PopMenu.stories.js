import React from "react";

import { PopMenu } from "./PopMenu";
import { Button } from "components/Button";
import { PopMenuItem } from "components/PopMenu";

export default {
    title: "Overlay/PopMenu/PopMenu",
    component: PopMenu,
    subcomponents: { PopMenuItem },
    argTypes: {},
    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The **PopMenu** component offers choices to the user when an element is clicked. Uses **PopMenuItem** as children \`<PopMenuItem/>\` or \`<PopMenu.Item/>\`.
                `,
            },
        },
    },
};

const Template = (args) => (
    <PopMenu {...args}>
        <PopMenu.Item text="Choice 1" />
        <PopMenu.Item text="Choice 2" />
        <PopMenu.Item text="Choice 3" />
    </PopMenu>
);

const DividedTemplate = (args) => (
    <PopMenu {...args}>
        <PopMenu.Item text="Choice 1" />
        <PopMenu.Item text="Choice 2" />
        <hr />
        <PopMenu.Item text="Choice 3" />
    </PopMenu>
);

export const Basic = Template.bind({});
Basic.args = {
    trigger: <Button text="Menu" />,
    variant: PopMenu.variants.borderless,
};
Basic.parameters = {
    layout: "centered",
};

export const Placement = Template.bind({});
Placement.args = {
    trigger: <Button text="Menu" />,
    placement: PopMenu.placements.topStart,
    variant: PopMenu.variants.borderless,
};
Placement.parameters = {
    layout: "centered",
};

export const WithDivider = DividedTemplate.bind({});
WithDivider.args = {
    trigger: <Button text="Menu" />,
    variant: PopMenu.variants.borderless,
};
WithDivider.parameters = {
    layout: "centered",
};
