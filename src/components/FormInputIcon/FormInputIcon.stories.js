import React from "react";

import { FormInputIcon } from "./FormInputIcon";
import { FormControl, FormLabel, Input } from "components/core";

export default {
    title: "Forms/FormInputIcon",
    component: FormInputIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            control: {
                type: "select",
            },
            options: Object.values(FormInputIcon.names),
        },
        color: {
            name: "color",
            type: { name: "string" },
            control: {
                type: "radio",
            },
            options: Object.values(FormInputIcon.colors),
        },
    },
};

const Template = (args) => (
    <FormControl>
        <FormLabel text="Username" />
        <Input />
        <FormInputIcon {...args} />
    </FormControl>
);

export const Basic = Template.bind({});
Basic.args = {
    name: "user",
    color: "dark",
};
