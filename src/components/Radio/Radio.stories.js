import React from "react";

import { Radio as RadioComponent, RadioGroup, ENUMS } from "./Radio";
import { Icon, ENUMS as IconEnums } from "../Icon";

export default {
    title: "Elements/Radio",
    component: RadioComponent,
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
    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `A multiple choice input element common in forms for making an \`OR\` type of choice
                \n**Special Usage Notes**
                \nThe Radio is intended to be used inside a [RadioGroup](./?path=/docs/elements-radiogroup--basic) for spacing styling.
                \n🚨 The \`name\` property links radios together (if you find multiple radios are being selected)
            `,
            },
        },
    },
};

const Radio = (args) => <RadioComponent {...args} />;

export const Basic = Radio.bind({});
Basic.args = { text: "A Fine Choice" };

export const Grouped = () => (
    <RadioGroup>
        <Radio name="nerd_type" text="Star Wars" isDefaultChecked />
        <Radio name="nerd_type" text="Star Trek" />
    </RadioGroup>
);
Grouped.parameters = {
    docs: {
        description: {
            story:
                "[RadioGroup](./?path=/docs/elements-radiogroup--basic) is used to space and align Radio components together and can have `labelText`",
        },
    },
};

export const Colored = Radio.bind({});
Colored.args = {
    color: ENUMS.colors.green,
    text: "This Radio has a different color",
    isDefaultChecked: true,
};

export const Controlled = Radio.bind({});
Controlled.args = {
    text: "A better choice",
    isChecked: true,
};
Controlled.parameters = {
    docs: {
        description: {
            story: "Can be controlled via the isChecked prop",
        },
    },
};

export const DefaultChecked = Radio.bind({});
DefaultChecked.args = {
    text: "A better choice",
    isDefaultChecked: true,
};
DefaultChecked.parameters = {
    docs: {
        description: {
            story: "If not controlled and a default is needed",
        },
    },
};

export const Disabled = Radio.bind({});
Disabled.args = {
    text: "No choice for you",
    isDisabled: true,
};

export const TruncatedLabels = (args) => (
    <>
        <div style={{ maxWidth: "200px" }}>
            <Radio {...args} />
        </div>
    </>
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
    <Radio {...args}>
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}>
            This has children{" "}
            <Icon name={IconEnums.names.photo} style={{ marginLeft: "4px" }} />
        </div>
    </Radio>
);