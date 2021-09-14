import React from "react";

import { SearchInput } from "./SearchInput";

export default {
    title: "Elements/SearchInput",
    component: SearchInput,
    argTypes: {
        hasClearButton: {
            name: "hasClearButton",
            type: { name: "boolean" },
            description: `Whether or not to show the clear button when search terms exist`,
        },
    },
};

const Template = (args) => <SearchInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    onChange: () => {},
    placeholder: "Search for people",
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
    onChange: () => {},
    placeholder: "Search for people",
    hasClearButton: true,
};
WithClearButton.parameters = {
    docs: {
        description: {
            story: "Note: Will only be visible when search terms are present",
        },
    },
};
