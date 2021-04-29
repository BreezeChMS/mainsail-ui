import React from "react";

import { FormHelpText } from "./FormHelpText";

export default {
    title: "Forms/FormHelpText",
    component: FormHelpText,
    argTypes: {},
};

const Template = (args) => <FormHelpText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "We will never sell or distribute your email.",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    children: (
        <span>
            Some text with a <a>link.</a>
        </span>
    ),
};
