import React from "react";
import { Icon } from "components/Icon";

import { ListGroup, ListGroupItem } from "./ListGroup";

export default {
    title: "Elements/ListGroup",
    component: ListGroup,
    argTypes: {},
    subcomponents: { ListGroupItem },
};

const DetailedTemplate = (args) => (
    <ListGroup {...args}>
        <ListGroupItem
            icon={Icon.names.add}
            text="Add Person"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
        />
        <ListGroupItem
            icon={Icon.names.people}
            text="Add Group"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
        />
        <ListGroupItem
            icon={Icon.names.archive}
            text="Archive Group"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, sint!"
        />
    </ListGroup>
);

const SimpleTemplate = (args) => (
    <ListGroup {...args}>
        <ListGroupItem icon={Icon.names.add} text="Add Person" />
        <ListGroupItem icon={Icon.names.people} text="Add Group" />
    </ListGroup>
);

export const Detailed = DetailedTemplate.bind({});
Detailed.args = {};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};
