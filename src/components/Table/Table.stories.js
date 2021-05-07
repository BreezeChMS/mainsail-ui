import React from "react";

import { Table } from "./Table";
import { Column } from "./Column";
import { Actions } from "./Actions";

export default {
    title: "Elements/Table",
    component: Table,
    subcomponents: { Column, Actions },
    argTypes: {},
};

const Template = (args) => (
    <Table {...args}>
        <Column field="name" />
        <Column field="age" />
        <Column field="occupation" />
    </Table>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: Table.variants.bordered,
    rowData: [
        {
            name: "Jim",
            age: 33,
            occupation: "Sales",
        },
        {
            name: "Dwight",
            age: 35,
            occupation: "Sales",
        },
        {
            name: "Pam",
            age: 28,
            occupation: "Administration",
        },
        {
            name: "Toby",
            age: 42,
            occupation: "Human Resources",
        },
    ],
};
