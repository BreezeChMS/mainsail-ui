import React from "react";

import { TimePicker } from "./TimePicker";

export default {
    title: "Forms/TimePicker",
    component: TimePicker,
    argTypes: {
        placement: {
            name: "placement",
            type: { name: "string" },
            control: {
                type: "select",
            },
            options: [...Object.values(TimePicker.placements)],
        },
        positioning: {
            name: "positioning",
            type: { name: "string" },
            control: {
                type: "select",
            },
            options: [...Object.values(TimePicker.positionings)],
        },
    },
};

const Template = (args) => <TimePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    placeholder: "00:00",
    timeOptions: [
        "12:00",
        "12:30",
        "1:00",
        "1:30",
        "2:00",
        "2:30",
        "3:00",
        "3:30",
        "4:00",
        "4:30",
        "5:00",
        "5:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
    ],
};

export const Disabled = Template.bind({});
Disabled.args = {
    placeholder: "00:00",
    timeOptions: ["12:00", "12:30", "1:00"],
    isDisabled: true,
};

export const NativeDropdowns = Template.bind({});
NativeDropdowns.args = {
    placeholder: "00:00",
    timeOptions: ["12:00", "12:30", "1:00"],
    isNative: true,
};
