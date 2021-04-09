import React from "react";

import { Checkbox, CheckboxGroup as CheckboxGroupComponent } from "./Checkbox";

export default {
    title: "Elements/CheckboxGroup",
    component: CheckboxGroupComponent,
    subcomponents: {
        Checkbox: Checkbox,
    },
    parameters: {
        docs: {
            description: {
                component: `A wrapping component to handle layout of [Checkbox](./?path=/docs/elements-checkbox--basic) components.`,
            },
        },
    },
};

const CheckboxGroup = (args) => <CheckboxGroupComponent {...args} />;

export const Basic = (args) => (
    <CheckboxGroup {...args}>
        <Checkbox name="nerd_type" text="Bacon" isDefaultChecked />
        <Checkbox name="nerd_type" text="Eggs" />
        <Checkbox name="nerd_type" text="Waffles" />
        <Checkbox name="nerd_type" text="Sausage" />
    </CheckboxGroup>
);
Basic.args = {
    labelText: "Choose breakfast",
};

export const IndeterminateGroup = (args) => {
    const [checkedBoxes, setChecked] = React.useState([true, false]);
    const allChecked = checkedBoxes.every(Boolean);
    const isIndeterminate = checkedBoxes.some(Boolean) && !allChecked;

    return (
        <>
            <Checkbox
                name="parent"
                color={args.color}
                isDisabled={args.isDisabled}
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) =>
                    setChecked([e.target.checked, e.target.checked])
                }>
                Parent
            </Checkbox>
            <CheckboxGroup className="ml-20 mt-12">
                <Checkbox
                    name="child1"
                    color={args.color}
                    isDisabled={args.isDisabled}
                    isChecked={checkedBoxes[0]}
                    onChange={(e) =>
                        setChecked([e.target.checked, checkedBoxes[1]])
                    }>
                    Child 1
                </Checkbox>
                <Checkbox
                    name="child2"
                    color={args.color}
                    isDisabled={args.isDisabled}
                    isChecked={checkedBoxes[1]}
                    onChange={(e) =>
                        setChecked([checkedBoxes[0], e.target.checked])
                    }>
                    Child 2
                </Checkbox>
            </CheckboxGroup>
        </>
    );
};
IndeterminateGroup.argTypes = {
    isTruncated: { table: { disable: true } },
    isIndeterminate: { table: { disable: true } },
    isDefaultChecked: { table: { disable: true } },
    isChecked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    name: { table: { disable: true } },
    text: { table: { disable: true } },
    className: { table: { disable: true } },
};
