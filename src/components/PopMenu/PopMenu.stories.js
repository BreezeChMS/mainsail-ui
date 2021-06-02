import React from "react";

import { PopMenu } from "./PopMenu";
import { Button } from "components/Button";
import { Icon } from "components/Icon";
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

export const KitchenSink = (args) => (
    <PopMenu hasPadding trigger={<Button text="Click me" />}>
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.email}
            text="Email"
            {...args}
        />
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.text}
            text="Text"
        />
        <hr />
        <PopMenu.Item isHeader text="Exports" />
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.document}
            text="Document"
        />
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.spreadsheet}
            text="Spreadsheet"
        />
        <hr />
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.tag}
            text="Add to Tags"
        />
        <PopMenu.Item
            color={PopMenu.Item.colors.dark}
            icon={Icon.names.archive}
            text="Archive"
        />
    </PopMenu>
);
