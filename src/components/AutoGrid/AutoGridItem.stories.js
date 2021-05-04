import React from "react";

import { AutoGrid, AutoGridItem } from "./AutoGrid";

export default {
    title: "Layout/AutoGridItem",
    component: AutoGridItem,
    parameters: {
        docs: {
            description: {
                component: `A subcomponent for AutoGrid
                \n- supply \`colSpan\` & \`rowSpan\` to control grid item spanning
                `,
            },
        },
    },
};

const Template = (args) => (
    <AutoGrid rows={3} cols={3}>
        <AutoGridItem data-testid="item" {...args} />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
    </AutoGrid>
);

export const Basic = Template.bind({});
Basic.args = {
    colSpan: 2,
    className: "bg-blue-light p-24",
    style: {
        fontFamily: "sans-serif",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    children: "Control this Item",
};
