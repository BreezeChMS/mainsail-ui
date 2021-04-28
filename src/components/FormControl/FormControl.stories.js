import React from "react";

import { FormControl } from "./FormControl";
import { Input } from "components/Input";
import { FormLabel } from "components/FormLabel";

export default {
    title: "Forms/FormControl",
    component: FormControl,
    argTypes: {},
    subcomponents: { Input, FormLabel },
};

const Template = (args) => (
    <FormControl {...args}>
        <FormLabel text="First Name" />
        <Input />
    </FormControl>
);

export const BasicInput = Template.bind({});
BasicInput.args = {
    id: "first-name",
};

export const RequiredInput = Template.bind({});
RequiredInput.args = {
    id: "first-name",
    isRequired: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
    id: "first-name",
    isDisabled: true,
};
