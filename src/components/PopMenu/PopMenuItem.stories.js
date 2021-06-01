import React from "react";
import { Button } from "components/Button";
import { PopMenu } from "./PopMenu";

export default {
    title: "Overlay/PopMenu/PopMenuItem",
    component: PopMenu.Item,
    argTypes: {},
    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The **PopMenu.Item** component exists as a simple sub component of **PopMenu**. Used as \`<PopMenuItem/>\` or \`<PopMenu.Item/>\`.
                `,
            },
        },
    },
};

const ItemTemplate = (args) => (
    <PopMenu trigger={<Button text="Click me" />}>
        <PopMenu.Item text="Choice 1" {...args} />
        <PopMenu.Item text="Choice 2" />
    </PopMenu>
);

export const Basic = ItemTemplate.bind({});
Basic.args = {
    text: "Change me",
};
