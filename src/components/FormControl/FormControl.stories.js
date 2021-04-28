import React from "react";

import { FormControl } from "./FormControl";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import { FormLabel } from "components/FormLabel";

export default {
    title: "Forms/FormControl",
    component: FormControl,
    argTypes: {},
    subcomponents: { Input, FormLabel },
};

const InputTemplate = (args) => (
    <FormControl {...args}>
        <FormLabel text="First Name" />
        <Input />
    </FormControl>
);

const TextareaTemplate = (args) => (
    <FormControl {...args}>
        <FormLabel text="Notes" />
        <Textarea placeholder="write something..." />
    </FormControl>
);

export const BasicInput = InputTemplate.bind({});
BasicInput.args = {
    id: "first-name",
    invalidText: "Please enter a First Name.",
};

export const RequiredInput = InputTemplate.bind({});
RequiredInput.args = {
    id: "first-name",
    isRequired: true,
    invalidText: "Please enter a First Name.",
};

export const HelpText = InputTemplate.bind({});
HelpText.args = {
    id: "first-name",
    width: FormControl.widths.md,
    helpText: "...where everybody knows your name.",
    invalidText: "Please enter a First Name.",
};

export const ErrorText = InputTemplate.bind({});
ErrorText.args = {
    id: "first-name",
    width: FormControl.widths.md,
    isInvalid: true,
    invalidText: "Please enter a First Name.",
};

export const DisabledInput = InputTemplate.bind({});
DisabledInput.args = {
    id: "first-name",
    isDisabled: true,
    invalidText: "Please enter a First Name.",
};

export const TextareaInput = TextareaTemplate.bind({});
TextareaInput.args = {
    id: "notes",
    width: FormControl.widths.lg,
    invalidText: "Please enter some Notes.",
};
