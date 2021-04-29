import React from "react";

import { FormControl } from "./FormControl";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import { FormLabel } from "components/FormLabel";
import { FormHelpText } from "components/FormHelpText";
import { FormInputOptions } from "components/FormInputOptions";
import { Checkbox } from "components/Checkbox";
import { Button } from "components/Button";

export default {
    title: "Forms/FormControl",
    component: FormControl,
    argTypes: {},
    subcomponents: {
        Input,
        FormLabel,
        FormHelpText,
        FormInputOptions,
    },
    parameters: {
        docs: {
            description: {
                component: `Wrapper for form elements
             \n- Provides context to children such as \`isInvalid\`, \`isDisabled\`, \`isRequired\`
             \n- Extras such as auto linking \`<FormLabel/>\` to \`<Input/>\` and auto-generated ids for aria attributes
                `,
            },
        },
    },
};

const BasicTemplate = (args) => (
    <FormControl {...args}>
        <FormLabel text="First Name" />
        <Input />
    </FormControl>
);

const HelpTextTemplate = (args) => (
    <FormControl {...args}>
        <FormLabel text="Email" />
        <Input type="email" />
        <FormHelpText text={"We will never sell or distribute your email"} />
    </FormControl>
);

const WithOptionsCheckbox = (args) => (
    <FormControl {...args}>
        <FormLabel text="Email" />
        <Input type="email" />
        <FormInputOptions>
            <Checkbox text="Private" />
            <Checkbox text="Exclude from group emails" />
        </FormInputOptions>
    </FormControl>
);

const WithLinkButton = (args) => (
    <FormControl {...args}>
        <FormLabel text="Parent Name" />
        <Input type="text" />
        <FormInputOptions>
            <Button variant={Button.variants.link} text="Add Another" />
        </FormInputOptions>
    </FormControl>
);

const TextareaTemplate = (args) => (
    <FormControl {...args}>
        <FormLabel text="Notes" />
        <Textarea placeholder="write something..." />
    </FormControl>
);

export const BasicInput = BasicTemplate.bind({});
BasicInput.args = {
    id: "first-name",
    invalidText: "Please enter a First Name.",
};

export const RequiredInput = BasicTemplate.bind({});
RequiredInput.args = {
    ...BasicInput.args,
    isRequired: true,
};

export const HelpText = HelpTextTemplate.bind({});
HelpText.args = {
    id: "email-address",
    invalidText: "Please provide your email address",
};

export const InputOptionsCheckbox = WithOptionsCheckbox.bind({});
InputOptionsCheckbox.args = {
    id: "email-address",
    invalidText: "Please provide your email address",
};

export const InputOptionsLinkButton = WithLinkButton.bind({});
InputOptionsLinkButton.args = {
    id: "email-address",
    invalidText: "Please provide your email address",
};

export const ErrorText = BasicTemplate.bind({});
ErrorText.args = {
    ...BasicInput.args,
    isInvalid: true,
};

export const DisabledInput = BasicTemplate.bind({});
DisabledInput.args = {
    ...BasicInput.args,
    isDisabled: true,
};

export const TextareaInput = TextareaTemplate.bind({});
TextareaInput.args = {
    id: "notes",
    width: FormControl.widths.lg,
    invalidText: "Please enter some Notes.",
};
