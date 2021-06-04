import React from "react";
import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { PopMenu } from "./PopMenu";

export default {
    title: "Overlay/PopMenu/Item",
    component: PopMenu.Item,
    argTypes: {
        icon: {
            name: "icon",
            type: { name: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(Icon.names),
        },
    },
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

export const ItemColor = (args) => (
    <PopMenu trigger={<Button text="Click me" />}>
        <PopMenu.Item icon={Icon.names.document} text="Document" {...args} />
        <PopMenu.Item
            icon={Icon.names.spreadsheet}
            text="Spreadsheet"
            {...args}
        />
    </PopMenu>
);

export const WithIcons = (args) => (
    <PopMenu trigger={<Button text="Click me" />}>
        <PopMenu.Item icon={Icon.names.document} text="Document" {...args} />
        <PopMenu.Item icon={Icon.names.spreadsheet} text="Spreadsheet" />
    </PopMenu>
);

export const WithHeader = (args) => (
    <PopMenu trigger={<Button text="Click me" />}>
        <PopMenu.Item {...args} />
        <PopMenu.Item icon={Icon.names.spreadsheet} text="Spreadsheet" />
        <PopMenu.Item icon={Icon.names.document} text="Document" />
    </PopMenu>
);

WithHeader.args = {
    text: "Exports",
    isHeader: true,
    onClick: null,
};
