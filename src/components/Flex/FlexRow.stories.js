/* eslint-disable react/prop-types */
import React from "react";

import { FlexRow, FlexCol } from "./Flex";

export default {
    title: "Layout/Flex/FlexRow",
    component: FlexRow,
    argTypes: {
        justifyContent: {
            name: "justifyContent",
            type: { justifyContent: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexRow.justifyContent),
        },
        alignItems: {
            name: "alignItems",
            type: { alignItems: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexRow.alignItems),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A \`<FlexRow/>\` is a wrapping element of \`<FlexCol/>\`
                `,
            },
        },
    },
};
const colStyle = { height: "80px" };
const rowStyle = { height: "300px" };
const Template = (args) => (
    <div>
        <span className="body-text">
            Control the dark blue <code>FlexRow</code> with params
        </span>
        <FlexRow
            {...args}
            style={rowStyle}
            className="border border-blue-light bg-blue-dark p-20">
            <FlexCol
                className="border border-blue-light bg-blue-primary"
                sm={6}
                style={colStyle}></FlexCol>
        </FlexRow>
    </div>
);

export const Basic = Template.bind({});
Basic.args = {
    alignItems: FlexRow.alignItems.flexStart,
    justifyContent: FlexRow.justifyContent.flexStart,
};
