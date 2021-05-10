import React from "react";

import { Table } from "./Table";
import { Column } from "./Column";
import { Actions } from "./Actions";

export default {
    title: "Elements/Table",
    component: Table,
    subcomponents: { Column, Actions },
    argTypes: {},

    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The Table allows you to display data in rows and columns with multiple options and sub components
                \n\`<Table/>\` is the main component that specifies the table-specific styling and accepts the row data. See props table below.
                \n\`<Column/>\` component specifies the different data points to be displayed within the rows. Much of the column styling and layout handling is controlled here.
                \n\`<Actions/>\` component specifies the various user interactions that can be performed on the row data.
            `,
            },
        },
    },
};

const officeRowData = [
    {
        first_name: "Jim",
        last_name: "Halpert",
        age: 33,
        occupation: "Sales",
    },
    {
        first_name: "Dwight",
        last_name: "Schrute",
        age: 35,
        occupation: "Sales",
    },
    {
        first_name: "Pam",
        last_name: "Beasley",
        age: 28,
        occupation: "Administration",
    },
    {
        first_name: "Toby",
        last_name: "",
        age: 42,
        occupation: "Human Resources",
    },
];

const Template = (args) => (
    <Table {...args}>
        <Column field="first_name" />
        <Column field="last_name" />
        <Column
            field="age"
            align={Column.aligments.center}
            className="bg-blue-light"
        />
        <Column
            field="occupation"
            className="px-8"
            align={Column.aligments.right}
        />
    </Table>
);

export const BasicRound = Template.bind({});
BasicRound.args = {
    variant: Table.variants.bordered,
    rowData: officeRowData,
};

BasicRound.parameters = {
    docs: {
        description: {
            story: `A basic table can be constructed without specifying a column config. It will be inferred from the \`<Column/>/\` components and data provided.`,
        },
    },
};

export const BasicOpen = Template.bind({});
BasicOpen.args = {
    variant: Table.variants.open,
    rowData: officeRowData,
};

BasicOpen.parameters = {
    docs: {
        description: {
            story: `A basic OPEN style table.`,
        },
    },
};
