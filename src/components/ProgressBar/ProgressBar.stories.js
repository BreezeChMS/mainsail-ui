import React from "react";

import { ProgressBar } from "./ProgressBar";

export default {
    title: "Elements/ProgressBar",
    component: ProgressBar,
    argTypes: {
        percentage: {
            name: "percentage",
            type: { name: "number" },
            control: {
                type: "range",
            },
        },
        color: {
            name: "color",
            type: { color: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(ProgressBar.colors),
        },
    },
};

const Template = (args) => <ProgressBar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    percentage: 25,
};

export const LargerStyled = Template.bind({});
LargerStyled.args = {
    percentage: 66,
    className: "border-blue-primary bg-white",
    classNameBar: "bg-blue-primary py-12",
};
