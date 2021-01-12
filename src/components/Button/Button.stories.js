import React from "react";
import { ICON_LIST } from "../Icon/Icon";

import { Button } from "./Button";

export default {
    title: "Mainsail UI/Button",
    component: Button,
    argTypes: {
        iconLeft: {
            name: "iconLeft",
            type: { name: "string", required: true },
            control: {
                type: "select",
                options: ["", ...ICON_LIST],
            },
        },
        iconRight: {
            name: "iconRight",
            type: { name: "string", required: true },
            control: {
                type: "select",
                options: ["", ...ICON_LIST],
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    text: "Click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    text: "Click me",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: "tertiary",
    text: "Click me",
};

export const Link = Template.bind({});
Link.args = {
    variant: "link",
    text: "Click me",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
    variant: "primary",
    text: "Close Window",
    iconLeft: "close",
};

export const IconRight = Template.bind({});
IconRight.args = {
    variant: "primary",
    text: "More",
    iconRight: "caret",
};
