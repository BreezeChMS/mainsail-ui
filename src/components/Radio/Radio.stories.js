import React from "react";

import { Radio as RadioComponent, ENUMS } from "./Radio";

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
};

const Radio = (args) => <RadioComponent {...args} />;

export const Basic = Radio.bind({});
Basic.args = { text: "A fine choice" };

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

export const GroupStacked = (args) => {
    return (
        <>
            <Radio
                color={args.color}
                name="cheeses"
                text="Cheddar"
                className="mb-10"
                isInline={args.isInline}
                onChange={args.onChange}
            />
            <Radio
                color={args.color}
                name="cheeses"
                text="Swiss"
                className="mb-10"
                onChange={args.onChange}
                isInline={args.isInline}
                isDefaultChecked={true}
            />
        </>
    );
};

export const GroupInline = (args) => {
    return (
        <>
            <Radio
                color={args.color}
                name="snacks"
                text="Pretzels"
                className="mb-10"
                isDefaultChecked
                isInline={true}
                {...args}
            />
            <Radio
                color={args.color}
                name="snacks"
                text="Popcorn"
                className="mb-10"
                isInline={true}
                {...args}
            />
        </>
    );
};
GroupInline.argTypes = {
    isInline: { control: { disable: true } },
};
