import React, { useState } from "react";

import { Table } from "./Table";
import { Column } from "./Column";
import { Actions } from "./Actions";
import _ from "lodash";

export default {
    title: "Elements/Table/Table",
    component: Table,
    subcomponents: { Column, Actions },
    argTypes: {},

    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The Table allows you to display data in rows and columns with multiple options and sub components.
                \n- \`<Table/>\` is the main component that controls **table-specific styling** and accepts the \`rowData\`. (See props table below.)
                \n- There are **two basic style variants** for the Table component (see \`variant\` prop below).
                \n- \`<Column/>\` component specifies the different data points to be displayed within the rows. Much of the column styling and layout handling can be controlled here.
                \n- \`<Actions/>\` component specifies the various user interactions that can be performed on the row data.
            `,
            },
        },
    },
};

const officeRowData = [
    {
        id: 1,
        first_name: "Jim",
        last_name: "Halpert",
        age: 33,
        occupation: "Sales",
    },
    {
        id: 2,
        first_name: "Dwight",
        last_name: "Schrute",
        age: 35,
        occupation: "Sales",
    },
    {
        id: 3,
        first_name: "Pam",
        last_name: "Beasley",
        age: 28,
        occupation: "Administration",
    },
    {
        id: 4,
        first_name: "Toby",
        last_name: "Flenderson",
        age: 42,
        occupation: "Human Resources",
    },
];

const Template = (args) => (
    <Table {...args}>
        <Column field="first_name" />
        <Column field="last_name" />
        <Column field="age" align={Column.alignments.center} />
        <Column
            field="occupation"
            className="px-8"
            align={Column.alignments.left}
        />
    </Table>
);

export const Bordered = Template.bind({});
Bordered.args = {
    variant: Table.variants.bordered,
    rowData: officeRowData,
};

Bordered.parameters = {
    docs: {
        description: {
            story: `A basic "bordered" table can be constructed without specifying a column config. It will be inferred from the \`<Column/>/\` components and data provided.`,
        },
    },
};

export const Open = Template.bind({});
Open.args = {
    variant: Table.variants.open,
    rowData: officeRowData,
};

Open.parameters = {
    docs: {
        description: {
            story: `A basic "open" style table.`,
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    rowData: officeRowData,
};

Loading.parameters = {
    docs: {
        description: {
            story: `A table can have its state set to \`isLoading\` to disable interaction.`,
        },
    },
};

export const HeaderConfig = (args) => (
    <Table {...args}>
        <Column field="first_name" />
        <Column field="last_name" />
        <Column field="age" align={Column.alignments.center} />
        <Column
            field="occupation"
            className="px-8"
            align={Column.alignments.right}
        />
    </Table>
);
HeaderConfig.args = {
    rowData: officeRowData,
    headerConfig: [
        {
            field: "first_name",
            label: "First",
            align: Column.alignments.left,
        },
        {
            label: "Other Stuff",
            className: "px-8",
            align: Column.alignments.left,
        },
    ],
};
HeaderConfig.parameters = {
    docs: {
        description: {
            story: `A table can be provided a header configuration that will explicitly control header details instead of inferring it from column children.`,
        },
    },
};

export const Sortable = (args) => {
    const [rowData, setRowData] = useState(officeRowData);

    const doSort = (sorts) => {
        setRowData(
            _.orderBy(
                rowData,
                [...Object.keys(sorts)],
                [...Object.values(sorts)]
            )
        );
    };

    return (
        <Table {...args} rowData={rowData} onSort={doSort}>
            <Column field="first_name" />
            <Column field="last_name" isSortable />
            <Column field="age" align={Column.alignments.center} isSortable />
            <Column
                field="occupation"
                className="px-8"
                align={Column.alignments.right}
            />
        </Table>
    );
};

Sortable.parameters = {
    docs: {
        description: {
            story: `A table can have certain columns marked as \`isSortable\` and invoke an \`onSort\` callback passing in the current sort criteria.`,
        },
    },
};

export const ExplicitWidth = (args) => (
    <Table {...args}>
        <Column field="first_name" width={"25%"} shouldTruncate />
        <Column field="last_name" width={"25%"} shouldTruncate />
        <Column field="age" align={Column.alignments.center} width={"20%"} />
        <Column
            field="occupation"
            className="pl-8"
            headerClassName="pl-8"
            align={Column.alignments.left}
            width={["100px", "140px", "auto"]}
            shouldTruncate
        />
    </Table>
);
ExplicitWidth.args = {
    isLoading: false,
    rowData: officeRowData,
};
ExplicitWidth.parameters = {
    docs: {
        description: {
            story: `A table can have it's columns set with an explicit \`maxWidth\` or \`minWidth\`.
                \n- Can be **set with a string** like \`maxWidth="120px"\`
                \n- A **responsive array** where the values of the array equate to sm/md/lg breakpoints can be supplied eg. \`maxWidth={["80px", "120px", "250px"]}\`
                \n- When using a responsive array to adjust column size, you may omit later breakpoints to prevent its usage eg. \`maxWidth={["80px", "120px"]}\` for sm/md breakpoint sizing.
            `,
        },
    },
};
