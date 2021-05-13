import React from "react";

import { Table } from "./Table";
import { Column } from "components/Table/Column";
import { Actions } from "./Actions";
import { PopMenu, PopMenuItem } from "components/PopMenu";
import { Button } from "components/Button";

export default {
    title: "Elements/Table/Actions",
    component: Actions,
    argTypes: {},
    subcomponents: { PopMenuItem, Button },
    parameters: {
        controls: { sort: "requiredFirst" },
        docs: {
            description: {
                component: `The **Actions** component is a subcomponent of **Table**
                \n- It can be used with the default \`menuOptions\` prop for just a simple PopMenu or it can be passed children buttons to use in conjunction with the PopMenu.
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

export const Basic = (args) => (
    <Table rowData={officeRowData}>
        <Column
            field="first_name"
            label="Name"
            width={["100px", "30%", "30%"]}
        />
        <Column
            field="occupation"
            width={["100px", "200px", "200px"]}
            shouldTruncate
        />
        <Actions {...args} />
    </Table>
);
Basic.args = {
    label: "Actions",
    menuOptions: function Options(rowData) {
        return (
            <>
                <PopMenu.Item
                    text={`Option for ${rowData.first_name}`}
                    onClick={() => alert(`Option 1 ${rowData.first_name}`)}
                />
                <PopMenu.Item
                    text="Option2"
                    onClick={() => alert(`Option 2 ${rowData.first_name}`)}
                />
            </>
        );
    },
    width: ["80px", "100px"],
    modifiers: [
        {
            name: "offset",
            enabled: true,
            options: {
                offset: [-10, -28],
            },
        },
    ],
};
Basic.parameters = {
    docs: {
        description: {
            story: `A table can have actions associated with its rows`,
        },
    },
};

export const WithChildren = (args) => (
    <Table rowData={officeRowData}>
        <Column
            field="first_name"
            label="Name"
            width={["100px", "30%", "30%"]}
        />
        <Column
            field="occupation"
            width={["100px", "200px", "200px"]}
            shouldTruncate
        />
        <Actions {...args} />
    </Table>
);
WithChildren.args = {
    label: "Actions",
    menuOptions: function Options(rowData) {
        return (
            <>
                <PopMenu.Item
                    text={`Option for ${rowData.first_name}`}
                    onClick={() => alert(`Option 1 ${rowData.first_name}`)}
                />
                <PopMenu.Item
                    text="Option 2"
                    onClick={() => alert(`Option 2 ${rowData.first_name}`)}
                />
            </>
        );
    },
    width: ["80px", "100px"],
    modifiers: [
        {
            name: "offset",
            enabled: true,
            options: {
                offset: [-10, -28],
            },
        },
    ],
    children: (
        <>
            <Button variant={Button.variants.tertiary} text="Edit" />
            <Button variant={Button.variants.tertiary} text="Delete" />
        </>
    ),
};
WithChildren.parameters = {
    docs: {
        description: {
            story: `Children can be passed to the \`<Actions/>\` component to supply extra interaction. These children can be passed as a function ([similar to a render-prop](https://reactjs.org/docs/render-props.html))to recieve row data.`,
        },
    },
};
