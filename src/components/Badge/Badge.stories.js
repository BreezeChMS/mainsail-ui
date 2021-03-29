import React from "react";

import { ENUMS as IconENUMS } from "../Icon/Icon";
import { Badge, flatColorList, ENUMS } from "./Badge";

export default {
    title: "Elements/Badge",
    component: Badge,
    argTypes: {
        color: {
            name: "color",
            type: { color: "string" },
            control: {
                type: "select",
                options: flatColorList,
            },
        },
        textColor: {
            name: "textColor",
            type: { textColor: "string" },
            control: {
                type: "select",
                options: flatColorList,
            },
        },
        size: {
            name: "size",
            type: { size: "string" },
            control: {
                type: "select",
                options: ENUMS.sizes,
            },
        },
        icon: {
            name: "icon",
            type: { name: "string" },
            description: `Will make an icon only badge if prop is provided a value.`,
            control: {
                type: "select",
                options: ["", ...Object.keys(IconENUMS.names)],
            },
        },
    },
};

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    text: "Sample",
    variant: ENUMS.variants.basic,
    color: ENUMS.colors.neutral.six,
    textColor: ENUMS.colors.neutral.two,
};

export const Removable = Template.bind({});
Removable.args = {
    text: "Removable",
    variant: ENUMS.variants.removable,
    color: ENUMS.colors.blue.light,
    textColor: ENUMS.colors.blue.dark,
    onRemove: (e) => console.log("You Removed me!", e),
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    variant: ENUMS.variants.basic,
    children: <span>Children</span>,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: ENUMS.variants.basic,
    color: ENUMS.colors.green.middle,
    textColor: ENUMS.colors.green.light,
    icon: IconENUMS.names.check,
};
