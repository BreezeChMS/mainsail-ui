/* eslint-disable react/prop-types */
import React from "react";

import { Flex, FlexRow, FlexCol } from "./Flex";

export default {
    title: "Layout/Flex",
    component: Flex,
    subcomponents: { FlexRow, FlexCol },
    argTypes: {
        justifyContent: {
            name: "justifyContent",
            type: { justifyContent: "string" },
            control: {
                type: "select",
            },
            options: Flex.Col.justifyContent,
        },
        alignItems: {
            name: "alignItems",
            type: { alignItems: "string" },
            control: {
                type: "select",
            },
            options: Flex.Col.alignItems,
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A very basic flex-box grid solution for simple layout structuring
                \n- similar to Bootstrap's Row/Column
                \n- supplies simple access to flex alignment properties
                \n- NO gutter support
                `,
            },
        },
    },
};
const colStyle = { height: "80px" };
const Template = (args) => (
    <div>
        <Flex.Row>
            <Flex.Col
                {...args}
                sm={12}
                md={6}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={12}
                md={2}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={4}
                md={4}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={8}
                md={4}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={6}
                md={8}
                lg={8}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={6}
                md={12}
                lg={12}
                className="border border-blue-light bg-blue-primary"
                style={colStyle}>
                <span>😃</span>
                <span>😃</span>
                <span>😃</span>
            </Flex.Col>
        </Flex.Row>
    </div>
);

export const Basic = Template.bind({});
Basic.args = {
    alignItems: Flex.Col.alignItems.flexStart,
    justifyContent: Flex.Col.justifyContent.flexStart,
};
