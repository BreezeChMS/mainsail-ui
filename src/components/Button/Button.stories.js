import React from "react";
import { ENUMS } from "../Icon";

import { Button, ENUMS as ButtonENUMS } from "./Button";

export default {
    title: "Elements/Button",
    component: Button,
    argTypes: {
        iconLeft: {
            name: "iconLeft",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(ENUMS.names)],
            },
        },
        iconRight: {
            name: "iconRight",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(ENUMS.names)],
            },
        },
        icon: {
            name: "icon",
            type: { name: "string" },
            description: `Will make an icon only button if prop is provided a value. If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(ENUMS.names)],
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: ButtonENUMS.variants.primary,
    text: "Click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: ButtonENUMS.variants.secondary,
    text: "Click me",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: ButtonENUMS.variants.tertiary,
    text: "Click me",
};

export const Link = Template.bind({});
Link.args = {
    variant: ButtonENUMS.variants.link,
    text: "Click me",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
    variant: ButtonENUMS.variants.primary,
    text: "Close Window",
    iconLeft: ENUMS.names.close,
};

export const IconRight = Template.bind({});
IconRight.args = {
    variant: ButtonENUMS.variants.primary,
    text: "More",
    iconRight: ENUMS.names.forward,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: ButtonENUMS.variants.icon,
    icon: ENUMS.names.settings,
};

export const Intent = Template.bind({});
Intent.args = {
    variant: ButtonENUMS.variants.primary,
    intent: ButtonENUMS.intents.danger,
    text: "I am dangerous",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: ButtonENUMS.variants.primary,
    text: "Wide Load",
    isFullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: ButtonENUMS.variants.primary,
    text: "Disabled",
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    variant: ButtonENUMS.variants.primary,
    text: "Confirm",
    isLoading: true,
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
    variant: ButtonENUMS.variants.primary,
    loadingText: "Waiting",
    text: "Confirm",
    isLoading: true,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    variant: ButtonENUMS.variants.primary,
    children: <span>Button has children</span>,
};
