/* eslint-disable react/prop-types */
import React from "react";

import { Flex } from "./Flex";

export default {
    title: "Layout/Flex",
    component: Flex,
    argTypes: {
        justifyContent: {
            name: "justifyContent",
            type: { justifyContent: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(Flex.Col.justifyContent),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A flex-box grid solution for layout structuring
                \n- similar to Bootstrap's Row/Column
                \n- supplies simple access to flex alignment properties
                `,
            },
        },
    },
};

const Template = (args) => (
    <div>
        <Flex.Row {...args}>
            <Flex.Col
                {...args}
                sm={12}
                md={6}
                className="border border-blue-light bg-orange-light "
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}>
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={12}
                md={2}
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}
                className="border border-blue-light bg-orange-light">
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={12}
                md={4}
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}
                className="border border-blue-light bg-orange-light">
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
        </Flex.Row>
        <Flex.Row {...args}>
            <Flex.Col
                {...args}
                sm={12}
                md={4}
                className="border border-blue-light bg-orange-light "
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}>
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={6}
                md={4}
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}
                className="border border-blue-light bg-orange-light">
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
            <Flex.Col
                {...args}
                sm={6}
                md={4}
                justifyContent={Flex.Col.justifyContent.center}
                alignItems={Flex.Col.alignItems.center}
                className="border border-blue-light bg-orange-light">
                <div className="w-full py-48 bg-blue-primary" />
            </Flex.Col>
        </Flex.Row>
    </div>
);

export const Basic = Template.bind({});
Basic.args = {
    hasGutters: true,
};

export const Col = (args) => {
    return (
        <Flex.Row>
            <Flex.Col {...args}>😃</Flex.Col>
        </Flex.Row>
    );
};
Col.args = {
    justifyContent: Flex.Col.justifyContent.center,
};
