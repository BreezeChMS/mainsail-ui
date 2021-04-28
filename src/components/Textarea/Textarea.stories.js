import React from "react";

import { Textarea } from "./Textarea";

export default {
    title: "Forms/Textarea",
    component: Textarea,
    argTypes: {},
};

const Template = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
