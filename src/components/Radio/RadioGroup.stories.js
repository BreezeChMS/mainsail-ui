import React from "react";

import { Radio, RadioGroup as RadioGroupComponent } from "./Radio";

export default {
    title: "Forms/RadioGroup",
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
        <Radio name="bacon_amount" text="Bacon" isDefaultChecked />
        <Radio name="bacon_amount" text="More Bacon" />
    </RadioGroup>
);
Basic.args = {
    labelText: "A Difficult Choice",
};

export const DisabledGroup = (args) => (
    <RadioGroup {...args}>
        <Radio name="breakfast_food" text="Bacon" isDefaultChecked />
        <Radio name="breakfast_food" text="Eggs" />
        <Radio name="breakfast_food" text="Waffles" />
        <Radio name="breakfast_food" text="Sausage" />
    </RadioGroup>
);
DisabledGroup.args = {
    labelText: "Breakfast Meat",
    isDisabled: true,
};
