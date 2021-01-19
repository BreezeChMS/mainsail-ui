import React from "react";
import { names } from "../Icon";

import { Button, variants } from "./Button";

export default {
    title: "Mainsail UI/Button",
    component: Button,
    argTypes: {
        iconLeft: {
            name: "iconLeft",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(names)],
            },
        },
        iconRight: {
            name: "iconRight",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(names)],
            },
        },
        icon: {
            name: "icon",
            type: { name: "string" },
            description: `If supplying a string, see list in Icon story`,
            control: {
                type: "select",
                options: ["", ...Object.keys(names)],
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: variants.primary,
    text: "Click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: variants.secondary,
    text: "Click me",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: variants.tertiary,
    text: "Click me",
};

export const Link = Template.bind({});
Link.args = {
    variant: variants.link,
    text: "Click me",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
    variant: variants.primary,
    text: "Close Window",
    iconLeft: names.close,
};

export const IconRight = Template.bind({});
IconRight.args = {
    variant: variants.primary,
    text: "More",
    iconRight: names.forward,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: variants.icon,
    icon: names.settings,
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: variants.primary,
    text: "Disabled",
    disabled: true,
};
