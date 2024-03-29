import React from "react";

import { FormControl } from "./FormControl";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import { FormLabel } from "components/FormLabel";
import { FormHelpText } from "components/FormHelpText";
import { FormInputOptions } from "components/FormInputOptions";
import { FormInputIcon } from "components/FormInputIcon";
import { Checkbox, CheckboxGroup } from "components/Checkbox";
import { Button } from "components/Button";
import { TimePicker } from "components/TimePicker";
import { RadioGroup, Radio } from "components/Radio";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default {
    title: "Forms/FormControl",
    component: FormControl,
    argTypes: {},
    subcomponents: {
        Input,
        FormLabel,
        FormHelpText,
        FormInputOptions,
        FormInputIcon,
    },
    parameters: {
        docs: {
            description: {
                component: `Wrapper for form elements
             \n- Provides context to children such as \`isInvalid\`, \`isDisabled\`, \`isRequired\`
             \n- Extras such as auto linking \`<FormLabel/>\` to \`<Input/>\` and auto-generated ids for aria attributes
             \n- **WARNING**: FormControl components default to width 100%. This is by design. Width/responsiveness is intended to be controlled via a layout component (such as [AutoGrid](./?path=/docs/layout-grid-autogrid--simple-grid))
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
    invalidText: "Please enter some Notes.",
};

export const FormCheckboxGroup = (args) => {
    return (
        <FormControl {...args}>
            <CheckboxGroup labelText="Which hobbits will you bring?">
                <Checkbox text="Frodo" />
                <Checkbox text="Sam" />
                <Checkbox text="Pippin" />
                <Checkbox text="Merry" />
            </CheckboxGroup>
        </FormControl>
    );
};

FormCheckboxGroup.args = {
    isDisabled: false,
    invalidText: "Please select a hobbit.",
};

FormCheckboxGroup.parameters = {
    docs: {
        description: {
            story:
                "You are free to use either the `FormLabel` component or the built-in `<label/>` of CheckboxGroup as shown here. Both will be provided form props like `isRequired` and `isDisabled`.",
        },
    },
};

export const FormRadioGroup = (args) => {
    return (
        <FormControl {...args}>
            <RadioGroup labelText="Who will carry the ring?">
                <Radio text="Frodo" />
                <Radio text="Sam" />
                <Radio text="Pippin" />
                <Radio text="Merry" />
            </RadioGroup>
        </FormControl>
    );
};

FormRadioGroup.args = {
    isDisabled: false,
    invalidText: "Please select a hobbit.",
};

FormRadioGroup.parameters = {
    docs: {
        description: {
            story:
                "You are free to use either the `FormLabel` component or the built-in `<label/>` of RadioGroup as shown here. Both will be provided form props like `isRequired` and `isDisabled`.",
        },
    },
};

export const TimePickerInput = (args) => (
    <FormControl {...args}>
        <FormLabel text="Meeting Time" />
        <TimePicker timeOptions={["1:30", "2:30", "3:30"]} value="1:30" />
    </FormControl>
);
TimePickerInput.args = {
    id: "timepicker",
    invalidText: "Please choose a time.",
};

export const WithInputIcon = (args) => (
    <FormControl>
        <FormLabel text="Username" />
        <Input />
        <FormInputIcon {...args} />
    </FormControl>
);
WithInputIcon.args = {
    name: "user",
    color: "dark",
};

export const DatePickerInput = (args) => (
    <FormControl {...args}>
        <FormLabel text="Meeting Date" />
        <DatePicker
            value={new Date()}
            className="pl-30"
            onChangeRaw={() => {}}
            dateFormatCalendar={"MMMM yyyy"}
            onChange={() => {}}
            dateFormat={"MM/dd/yyyy"}
            placeholderText={"MM/DD/YYYY"}
        />
        <FormInputIcon
            color={FormInputIcon.colors.dark}
            name={FormInputIcon.names.calendar}
        />
    </FormControl>
);
DatePickerInput.args = {
    id: "datepicker",
    invalidText: "Please choose a date.",
};

DatePickerInput.parameters = {
    docs: {
        description: {
            story:
                "A third-party datepicker can be supplied to the FormControl (such as `react-datepicker`) which can receive all the benefits of the FormControl context (invalid, disabled etc).",
        },
    },
};
