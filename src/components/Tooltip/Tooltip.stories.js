import React from "react";

import { Tooltip } from "./Tooltip";

export default {
    title: "Overlay/Tooltip",
    component: Tooltip,
    argTypes: {
    },
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: Tooltip.variant.primary,
    text: "Click me",
};
