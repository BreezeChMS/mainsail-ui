import React from "react";

import { NativeDatePicker } from "./NativeDatePicker";

export default {
    title: "Forms/DatePicker (Native)",
    component: NativeDatePicker,
    argTypes: {},
};

const Template = (args) => <NativeDatePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
