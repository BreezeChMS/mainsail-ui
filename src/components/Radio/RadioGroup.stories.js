import React from "react";

import { Radio, RadioGroup as RadioGroupComponent } from "./Radio";

export default {
    title: "Elements/RadioGroup",
    component: RadioGroupComponent,
    subcomponents: {
        Radio: Radio,
    },
    parameters: {
        docs: {
            description: {
                component: `A wrapping component to handle layout of [Radio](./?path=/docs/elements-radio--basic) components.`,
            },
        },
    },
};

const RadioGroup = (args) => <RadioGroupComponent {...args} />;

export const Basic = (args) => (
    <RadioGroup {...args}>
        <Radio name="nerd_type" text="Bacon" isDefaultChecked />
        <Radio name="nerd_type" text="More Bacon" />
    </RadioGroup>
);
Basic.args = {
    labelText: "A Difficult Choice",
};
