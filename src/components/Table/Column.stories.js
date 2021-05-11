import React, { useState } from "react";

import { Table } from "./Table";
import { Column } from "./Column";
import _ from "lodash";

export default {
    title: "Elements/Table/Column",
    component: Column,
    argTypes: {},

    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The **Column** is a subcomponent of **Table**
                \n\`<Table/>\` is the main component that specifies the table-specific styling and accepts the row data. See props table below.
                \n\`<Column/>\` component specifies the different data points to be displayed within the rows. Much of the column styling and layout handling is controlled here.
                \n\`<Actions/>\` component specifies the various user interactions that can be performed on the row data.
            `,
            },
        },
    },
};

const simpleData = [
    { name: "Bert", age: 38, favorite_phrase: "Chim Chim Cher-ee" },
    {
        name: "Mary",
        age: 33,
        favorite_phrase: "super cali fragilistic expiali docious",
    },
];

const Template = (args) => {
    const [rowData, setRowData] = useState(simpleData);

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
        <>
            <p className="mb-20 text-neutral-3">
                Note: Highlighted column can be affected by controls
            </p>

            <p className="mb-20 body-text text-neutral-3">
                Available <code>field</code> choices are{" "}
                <code>name, age, favorite_phrase</code>
            </p>

            <Table onSort={doSort} rowData={rowData}>
                <Column field="name" width={["60%", "75%"]} />
                <Column {...args} />
            </Table>
        </>
    );
};

export const Basic = Template.bind({});
Basic.args = {
    field: "age",
    className: "bg-blue-light p-10",
    headerClassName: "pl-10",
};

Basic.parameters = {
    docs: {
        description: {
            story: `A basic Column contains at a minimum the data \`field\` it presents`,
        },
    },
};

export const Alignment = Template.bind({});
Alignment.args = {
    field: "age",
    className: "bg-blue-light p-10",
    align: Column.alignments.center,
};

Alignment.parameters = {
    docs: {
        description: {
            story: `A Column can have its alignment set to \`left\`, \`center\`, or \`right\`.`,
        },
    },
};

export const TruncatedWidth = Template.bind({});
TruncatedWidth.args = {
    field: "favorite_phrase",
    width: ["130px", "120px", "120px"],
    className: "bg-blue-light p-10",
    shouldTruncate: true,
};

TruncatedWidth.parameters = {
    docs: {
        description: {
            story: `A Column can be truncated to fit a specified width.`,
        },
    },
};
