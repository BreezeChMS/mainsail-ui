import React from "react";

import { Avatar } from "./Avatar";

export default {
    title: "Elements/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            name: "size",
            type: { size: "string" },
            control: {
                type: "select",
            },
            options: Object.values(Avatar.sizes),
        },
    },
};

const Template = (args) => <Avatar {...args} />;

export const MediumAvatar = Template.bind({});
MediumAvatar.args = {
    size: "md",
    alt: "Medium Image",
    src: "https://i.pravatar.cc/300?u=fake1266783426679@pravatar.com",
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: "sm",
    alt: "Small Image",
    src: "https://i.pravatar.cc/300?u=abc1234",
};
