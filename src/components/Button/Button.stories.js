import React from "react";
import { Icon } from "components/Icon";

import { Button } from "./Button";

export default {
    title: "Forms/Button",
    component: Button,
    argTypes: {
        iconLeft: {
            name: "iconLeft",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
            },
            options: ["", ...Object.keys(Icon.names)],
        },
        iconRight: {
            name: "iconRight",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
            },
            options: ["", ...Object.keys(Icon.names)],
        },
        icon: {
            name: "icon",
            type: { name: "string" },
            description: `Will make an icon only button if prop is provided a value. If supplying a string, see list in Icon story`,
            control: {
                type: "select",
            },
            options: ["", ...Object.keys(Icon.names)],
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: Button.variants.primary,
    text: "Click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: Button.variants.secondary,
    text: "Click me",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: Button.variants.tertiary,
    text: "Click me",
};

export const Link = Template.bind({});
Link.args = {
    variant: Button.variants.link,
    text: "Click me",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
    variant: Button.variants.primary,
    text: "Close Window",
    iconLeft: Icon.names.close,
};

export const IconRight = Template.bind({});
IconRight.args = {
    variant: Button.variants.primary,
    text: "More",
    iconRight: Icon.names.forward,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: Button.variants.icon,
    icon: Icon.names.settings,
};

export const Intent = Template.bind({});
Intent.args = {
    variant: Button.variants.primary,
    intent: Button.intents.danger,
    text: "I am dangerous",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: Button.variants.primary,
    text: "Wide Load",
    isFullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: Button.variants.primary,
    text: "Disabled",
    isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    variant: Button.variants.primary,
    text: "Confirm",
    isLoading: true,
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
    variant: Button.variants.primary,
    loadingText: "Waiting",
    text: "Confirm",
    isLoading: true,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    variant: Button.variants.primary,
    children: <span>Button has children</span>,
};
