import React from "react";

import { Dropdown } from "./Dropdown";
import { FormControl } from "components/FormControl";
import { FormLabel } from "components/FormLabel";
import { Button } from "components/Button";
import { Icon } from "components/Icon";

export default {
    title: "Forms/Dropdown",
    component: Dropdown,
    argTypes: {},
};

const FormControlTemplate = (args) => (
    <div
        style={{
            minHeight: "300px",
            minWidth: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
        <FormControl
            isDisabled={args.isDisabled}
            isRequired={args.isRequired}
            isReadOnly={args.isReadOnly}
            width={FormControl.widths.md}>
            <FormLabel text="Which Hobbit is Best?" />
            <Dropdown {...args} />
        </FormControl>
    </div>
);

const Template = (args) => (
    <div style={{ width: "400px", height: "400px" }}>
        <Dropdown {...args} />
    </div>
);

export const Basic = FormControlTemplate.bind({});
Basic.args = {
    options: [
        { text: "Frodo", value: 1 },
        { text: "Samwise", value: 2 },
        { text: "Merry", value: 3 },
        { text: "Pippin", value: 4 },
    ],
};
Basic.parameters = {
    layout: "centered",
};

export const ControlledSelection = FormControlTemplate.bind({});
ControlledSelection.args = {
    value: 2,
    options: [
        { text: "Frodo", value: 1 },
        { text: "Samwise", value: 2 },
        { text: "Merry", value: 3 },
        { text: "Pippin", value: 4 },
    ],
};
ControlledSelection.parameters = {
    docs: {
        description: {
            story: `The Dropdown can have a controlled selection via the \`value\` prop.`,
        },
    },
};

export const NativeDropdown = FormControlTemplate.bind({});
NativeDropdown.args = {
    isNative: true,
    options: [
        { text: "Frodo", value: 1 },
        { text: "Samwise", value: 2 },
        { text: "Merry", value: 3 },
        { text: "Pippin", value: 4 },
    ],
};
NativeDropdown.parameters = {
    docs: {
        description: {
            story: `The Dropdown can be rendered as a native \`<select/>\` for use on mobile.`,
        },
    },
};

export const Disabled = FormControlTemplate.bind({});
Disabled.args = {
    isDisabled: true,
    options: [
        { text: "Frodo", value: 1 },
        { text: "Samwise", value: 2 },
        { text: "Merry", value: 3 },
        { text: "Pippin", value: 4 },
    ],
};

export const ComponentOptions = FormControlTemplate.bind({});
ComponentOptions.args = {
    options: [
        {
            text: "Frodo",
            value: 1,
            template: function Component1() {
                return (
                    <div
                        data-testid="custom-opt1"
                        className="flex align-center">
                        <Icon name="add" className="mr-8" />
                        Frodo
                    </div>
                );
            },
        },
        {
            text: "Samwise",
            value: 2,
            template: function Component2() {
                return (
                    <div
                        data-testid="custom-opt2"
                        className="flex align-center">
                        <Icon name="user" className="mr-8" />
                        Samwise
                    </div>
                );
            },
        },
        {
            text: "Merry",
            value: 3,
            template: function Component3() {
                return (
                    <div
                        data-testid="custom-opt3"
                        className="flex align-center">
                        <Icon name="email" className="mr-8" />
                        Merry
                    </div>
                );
            },
        },
        {
            text: "Pippin",
            value: 4,
            template: function Component4() {
                return (
                    <div
                        data-testid="custom-opt4"
                        className="flex align-center">
                        <Icon name="delete" className="mr-8" />
                        Pippin
                    </div>
                );
            },
        },
    ],
};
ComponentOptions.parameters = {
    docs: {
        description: {
            story: `The \`options\` prop array can be built with a \`template\` key that contains a function to render any React Component.

    // Example

    <Dropdown
        options = [{value: 1, text: "Option 1", template: () => <Custom Stuff/> }]
    />

    // Note: text key will still be used for displaying when selected for simplicity.
            `,
        },
    },
};

export const CustomTrigger = Template.bind({});
CustomTrigger.args = {
    customTrigger: (
        <Button
            text="Batch"
            iconRight={Button.iconNames.caret}
            variant={Button.variants.secondary}
        />
    ),
    options: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
        { text: "6", value: 6 },
        { text: "7", value: 7 },
        { text: "8", value: 8 },
        { text: "9", value: 9 },
        { text: "10", value: 10 },
        { text: "11", value: 11 },
        { text: "12", value: 12 },
        { text: "13", value: 13 },
        { text: "14", value: 14 },
        { text: "15", value: 15 },
        { text: "16", value: 16 },
        { text: "17", value: 17 },
        { text: "18", value: 18 },
        { text: "19", value: 19 },
        { text: "20", value: 20 },
        { text: "21", value: 21 },
        { text: "22", value: 22 },
    ],
    placement: Dropdown.placements.bottom,
    menuOffset: 16,
    hasCaret: false,
    modifiers: [
        {
            name:
                "sameWidthAsRef // This is an optional modifier that ensures the popper menu is same width as trigger",
            enabled: true,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: ({ state }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect: ({ state }) => {
                state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
            },
        },
    ],
};
CustomTrigger.parameters = {
    docs: {
        description: {
            story: `Virtually any element can become a trigger. It is intended to be used on \`<Button/>\` components in this way.
                \n**A couple things to Note**:
                \n- This button supplies its own caret icon (click Show Code to see)
                \n- The \`modifiers\` supplied are optionally added to ensure the popperjs menu is the same width as the parent ref trigger element (Button).`,
        },
    },
};
