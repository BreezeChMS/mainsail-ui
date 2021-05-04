/* eslint-disable react/prop-types */
import React from "react";

import { FlexRow, FlexCol } from "./Flex";

export default {
    title: "Layout/Flex/FlexCol",
    component: FlexCol,
    argTypes: {
        justifyContent: {
            name: "justifyContent",
            type: { justifyContent: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexCol.justifyContent),
        },
        alignItems: {
            name: "alignItems",
            type: { alignItems: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexCol.alignItems),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A \`<FlexCol/>\` for use inside a \`<FlexRow/>\`

                `,
            },
        },
    },
};
const colStyle = { minHeight: "80px" };

const Template = (args) => (
    <div>
        <span className="body-text">
            Control the dark blue <code>FlexCol</code> with params
        </span>
        <FlexRow
            alignItems={FlexRow.alignItems.center}
            className="border border-blue-light bg-blue-light">
            <FlexCol
                {...args}
                className="border border-blue-light bg-blue-dark"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={4}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
            <FlexCol
                sm={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </FlexCol>
        </FlexRow>
    </div>
);

export const Basic = Template.bind({});
Basic.args = {
    alignItems: FlexCol.alignItems.center,
    justifyContent: FlexCol.justifyContent.center,
};
