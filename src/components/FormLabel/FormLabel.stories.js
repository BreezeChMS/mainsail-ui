import React from "react";

import { FormLabel } from "./FormLabel";

export default {
    title: "Forms/FormLabel",
    component: FormLabel,
    argTypes: {},
};

const Template = (args) => <FormLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: "First Name",
};

export const UsingChildren = Template.bind({});
UsingChildren.args = {
    children: "First Name",
};
