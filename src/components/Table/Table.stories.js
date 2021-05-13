import React, { useState } from "react";

import { Table } from "./Table";
import { Column } from "./Column";
import { Actions } from "./Actions";
import { PopMenuItem } from "components/PopMenu";
import _ from "lodash";
import { Button } from "components/Button";

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
                \n- \`<Table/>\` is the main component that controls **table-specific styling** and accepts the \`rowData\` prop. (See props table below.)
                \n- There are **two basic style variants** for the Table component "bordered" & "open" (see \`variant\` prop below).
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
        <Column field="first_name" width={["20%", "25%"]} />
        <Column
            field="last_name"
            width={["15%", "25%"]}
            hideOnBreakpoints={["sm"]}
        />
        <Column field="age" align={Column.alignments.center} width="80px" />
        <Column
            field="occupation"
            align={Column.alignments.left}
            shouldTruncate
        />
    </Table>
);

let setSortedData;
let sortedData;
const SortableTemplate = (args) => {
    const [rowData, setRowData] = useState(officeRowData);
    setSortedData = setRowData;
    sortedData = rowData;

    return (
        <Table {...args} rowData={rowData}>
            <Column field="first_name" isSortable />
            <Column field="last_name" isSortable />
            <Column field="age" align={Column.alignments.center} isSortable />
            <Column field="occupation" align={Column.alignments.right} />
        </Table>
    );
};

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
    placeholderRows: 8,
};

Loading.parameters = {
    docs: {
        description: {
            story: `A table can have its state set to \`isLoading\` to disable interaction. \`placeholderRowCount\` can be set to dictate how many placeholder rows are used during loading when no initial rowData is present.`,
        },
    },
};

export const Selectable = Template.bind({});
Selectable.args = {
    isSelectable: true,
    rowData: officeRowData,
    variant: Table.variants.open,
};

Selectable.parameters = {
    docs: {
        description: {
            story: `A table can have its rows selectable with the \`isLoading\` prop. The \`onSelect\` callback provides a signature of \`(row, checkedState, eventObject) => {}\`. View the **Actions** tab on the Canvas view to see function calls.`,
        },
    },
};

export const HeaderConfig = SortableTemplate.bind({});
HeaderConfig.args = {
    onSort: (sorts) => {
        setSortedData(
            _.orderBy(
                sortedData,
                [...Object.keys(sorts)],
                [...Object.values(sorts)]
            )
        );
    },
    headerConfig: [
        {
            field: "first_name",
            label: "Name",
            isSortable: true,
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

export const Sortable = SortableTemplate.bind({});
Sortable.args = {
    onSort: (sorts) => {
        setSortedData(
            _.orderBy(
                sortedData,
                [...Object.keys(sorts)],
                [...Object.values(sorts)]
            )
        );
    },
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
            story: `A table can have it's columns set with an explicit, \`width\`, \`maxWidth\` or \`minWidth\`.
                \n- Can be **set with a string** like \`maxWidth="120px"\`
                \n- A **responsive array** where the values of the array equate to sm/md/lg breakpoints can be supplied eg. \`maxWidth={["80px", "120px", "250px"]}\`
                \n- When using a responsive array to adjust column size, you may omit later breakpoints to too fall back to previous breakpoint eg. \`maxWidth={["80px", "120px"]}\` for sm/md breakpoints and lg will use md sizing.
            `,
        },
    },
};

export const WithActions = (args) => (
    <Table {...args}>
        <Column field="first_name" width={["20%", "25%"]} />
        <Column
            field="last_name"
            width={["15%", "25%"]}
            hideOnBreakpoints={["sm"]}
        />
        <Column field="age" align={Column.alignments.center} width="80px" />
        <Column field="occupation" align={Column.alignments.left} />
        <Actions
            label="Actions"
            menuOptions={
                <>
                    <PopMenuItem text="Choice 1" />
                    <PopMenuItem text="Choice 2" />
                </>
            }>
            <Button variant={Button.variants.tertiary} text="Edit" />
        </Actions>
    </Table>
);
WithActions.args = {
    rowData: officeRowData,
};

export const SimplerActions = (args) => (
    <Table {...args}>
        <Column field="first_name" width={["20%", "25%"]} />
        <Column
            field="last_name"
            width={["15%", "25%"]}
            hideOnBreakpoints={["sm"]}
        />
        <Column field="occupation" align={Column.alignments.left} />
        <Actions label="Actions">
            <Button
                className="mr-4"
                variant={Button.variants.icon}
                icon={Button.iconNames.edit}
                text="Edit"
            />
            <Button
                variant={Button.variants.icon}
                icon={Button.iconNames.delete}
                text="Delete"
            />
        </Actions>
    </Table>
);
SimplerActions.args = {
    rowData: officeRowData,
};
