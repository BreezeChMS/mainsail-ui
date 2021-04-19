import React from "react";

import { Spinner } from "./Spinner";

export default {
    title: "Elements/Spinner",
    component: Spinner,
    argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: Spinner.colors.default,
};

export const Light = Template.bind({});
Light.args = {
    color: Spinner.colors.light,
};

export const Dark = Template.bind({});
Dark.args = {
    color: Spinner.colors.dark,
};
