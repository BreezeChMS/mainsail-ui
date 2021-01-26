import React from "react";

import { Spinner, ENUMS } from "./Spinner";

export default {
    title: "Mainsail UI/Spinner",
    component: Spinner,
    argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: ENUMS.colors.default,
};

export const Light = Template.bind({});
Light.args = {
    color: ENUMS.colors.light,
};

export const Dark = Template.bind({});
Dark.args = {
    color: ENUMS.colors.dark,
};
