import React from "react";

import { AutoGrid, AutoGridItem } from "./AutoGrid";
import { FormControl, FormLabel, Input, Dropdown } from "components/core";

export default {
    title: "Layout/Grid/AutoGridItem",
    component: AutoGridItem,
    parameters: {
        docs: {
            description: {
                component: `A subcomponent for AutoGrid
                \n- supply \`colSpan\` & \`rowSpan\` to control grid item spanning
                \n- can control grid item alignment with \`alignItems\` & \`justifyContent\`
                `,
            },
        },
    },
};

const Template = (args) => (
    <AutoGrid gap={15} rows={3} cols={3}>
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

export const FormExample = () => {
    return (
        <AutoGrid cols={12} gap={10}>
            <AutoGrid.Item colSpan={12}>
                <FormControl>
                    <FormLabel text="Address" />
                    <Input />
                </FormControl>
            </AutoGrid.Item>
            <AutoGrid.Item colSpan={[12, 6]}>
                <FormControl>
                    <FormLabel text="City" />
                    <Input />
                </FormControl>
            </AutoGrid.Item>
            <AutoGrid.Item colSpan={[12, 2]}>
                <FormControl>
                    <FormLabel text="State" />
                    <Dropdown options={[]} placeholder="" />
                </FormControl>
            </AutoGrid.Item>
            <AutoGrid.Item colSpan={[12, 4]}>
                <FormControl>
                    <FormLabel text="Zip Code" />
                    <Input />
                </FormControl>
            </AutoGrid.Item>
        </AutoGrid>
    );
};
