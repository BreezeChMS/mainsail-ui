import React from "react";

import { ListGroupItem } from "./ListGroup";
import { Icon } from "components/Icon";

export default {
    title: "Elements/ListGroupItem",
    component: ListGroupItem,
    argTypes: {
        icon: {
            name: "icon",
            type: { name: "string" },
            description: `Icon to display left of the text text`,
            control: {
                type: "select",
            },
            options: ["", ...Object.keys(Icon.names)],
        },
    },
};

const ComplexListItemTemplate = (args) => (
    <div>
        <ListGroupItem {...args} />
    </div>
);

export const ListItem = ComplexListItemTemplate.bind({});
ListItem.args = {
    text: "New Person",
    icon: Icon.names.add,
    description: "Add a new person to the database as a member of this family.",
};

export const ActiveItem = ComplexListItemTemplate.bind({});
ActiveItem.args = {
    text: "New Person",
    icon: Icon.names.add,
    isActive: true,
    description: "Add a new person to the database as a member of this family.",
};
