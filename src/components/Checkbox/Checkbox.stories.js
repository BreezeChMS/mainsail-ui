import React from "react";

import {
    Checkbox as CheckboxComponent,
    CheckboxGroup,
    ENUMS,
} from "./Checkbox";
import { IndeterminateGroup as IndeterminateGroupStory } from "./CheckboxGroup.stories";

export default {
    title: "Elements/Checkbox",
    component: CheckboxComponent,
    argTypes: {
        color: {
            name: "color",
            type: { color: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(ENUMS.colors),
        },
        isDefaultChecked: {
            name: "isDefaultChecked",
            type: { isDefaultChecked: "boolean" },
            control: false,
        },
        isChecked: {
            name: "isChecked",
            type: { isChecked: "boolean" },
            control: false,
        },
    },
};

const Checkbox = (args) => <CheckboxComponent {...args} />;

export const Basic = Checkbox.bind({});
Basic.args = {
    text: "Option 1",
    isDefaultChecked: true,
};

export const Indeterminate = Checkbox.bind({});
Indeterminate.args = {
    text: "Not quite selected",
    isIndeterminate: true,
};

export const IndeterminateGroup = IndeterminateGroupStory;

export const Grouped = (args) => (
    <CheckboxGroup labelText="Fancy Group">
        <Checkbox text="Home" isDefaultChecked color={args.color} />
        <Checkbox text="Cell" color={args.color} />
        <Checkbox text="Work" color={args.color} />
    </CheckboxGroup>
);
Grouped.parameters = {
    docs: {
        description: {
            story:
                "[CheckboxGroup](./?path=/docs/elements-Checkboxgroup--basic) is used to space and align Checkbox components together and can have `labelText`",
        },
    },
};

export const Colored = Checkbox.bind({});
Colored.args = {
    color: ENUMS.colors.green,
    text: "This checkbox has a different color",
    isDefaultChecked: true,
};

export const Controlled = Checkbox.bind({});
Controlled.args = {
    text: "A choice",
    isChecked: true,
};
Controlled.parameters = {
    docs: {
        description: {
            story: "Can be a controlled component via the isChecked prop",
        },
    },
};

export const DefaultChecked = Checkbox.bind({});
DefaultChecked.args = {
    text: "Another choice",
    isDefaultChecked: true,
};
DefaultChecked.parameters = {
    docs: {
        description: {
            story: "If not controlled and a default is needed",
        },
    },
};

export const Disabled = Checkbox.bind({});
Disabled.args = {
    text: "No choice for you",
    isDisabled: true,
};

export const TruncatedLabels = (args) => (
    <CheckboxGroup style={{ maxWidth: "200px" }}>
        <Checkbox {...args} />
    </CheckboxGroup>
);
TruncatedLabels.args = {
    isTruncated: true,
    text:
        "A really long label that might come from user generated data because they are users and cannot be trusted",
};
TruncatedLabels.parameters = {
    docs: {
        description: {
            story: "Note: Will be truncated by the width of the parent",
        },
    },
};

export const WithChildren = (args) => (
    <Checkbox {...args}>
        <div>This has children</div>
    </Checkbox>
);
