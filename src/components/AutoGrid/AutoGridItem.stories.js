import React from "react";

import { AutoGrid, AutoGridItem } from "./AutoGrid";

export default {
    title: "Layout/Grid/AutoGridItem",
    component: AutoGridItem,
    parameters: {
        docs: {
            description: {
                component: `A responsive subcomponent for AutoGrid - Useful for controlling alignment and justification inside a grid
                \n- supply \`colSpan\` & \`rowSpan\` to control grid item spanning
                \n- can control grid item alignment with \`alignItems\` & \`justifyContent\`
                \n- NOTE: You do not need to wrap a FormControl with this for the purpose of using \`colSpan\` because FormControl supports that prop natively
                `,
            },
        },
    },
};

const Template = (args) => (
    <AutoGrid gap={15} rows={3} cols={4}>
        <AutoGridItem data-testid="item" {...args} />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
        <AutoGridItem data-testid="item" className="bg-blue-dark" />
    </AutoGrid>
);

export const Basic = Template.bind({});
Basic.args = {
    colSpan: 2,
    className: "bg-blue-light body-text",
    style: { minHeight: "200px" },
    children: "Control this Item",
    alignItems: AutoGridItem.alignItems.center,
};

export const Responsive = Template.bind({});
Responsive.args = {
    colSpan: [3, 2, 1],
    className: "bg-blue-light body-text",
    style: { minHeight: "200px" },
    children: "Control this Item",
    alignItems: AutoGridItem.alignItems.center,
};
Responsive.parameters = {
    docs: {
        description: {
            story:
                "`<AutoGrid.Item/>` `rowSpan` and `colSpan` can be supplied an array of row/col counts to use at `sm`, `md`, and `lg` breakpoints.",
        },
    },
};
