import React from "react";

import { FormInputOptions } from "./FormInputOptions";
import { Checkbox } from "components/Checkbox";

export default {
    title: "Forms/FormInputOptions",
    component: FormInputOptions,
    argTypes: {},
};

const CheckboxTemplate = (args) => (
    <FormInputOptions {...args}>
        <Checkbox text="Private" />
    </FormInputOptions>
);

export const WithCheckbox = CheckboxTemplate.bind({});
WithCheckbox.args = {};
