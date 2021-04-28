/* eslint-disable react/prop-types */
import React from "react";

import { AutoGrid } from "./AutoGrid";

export default {
    title: "Layout/AutoGrid",
    component: AutoGrid,
    argTypes: {
        flow: {
            name: "flow",
            type: { flow: "string" },
            control: {
                type: "select",
            },
            options: Object.keys(AutoGrid.flows),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A quick & easy automatic grid solution using CSS Grid
                \n- supply column count with \`cols\` & row count with \`rows\`
                \n- specify auto count of columns or rows (Note: \`flow\` direction must match auto direction e.g. \`flow=col\` \`col=auto\`)
                `,
            },
        },
    },
};

const Box = (props) => (
    <div
        style={{
            color: "white",
            fontFamily: "sans-serif",
            background: "#006fba",
            borderRadius: "8px",
            height: "75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        {...props}>
        {props.label}
    </div>
);

const Template = (args) => (
    <AutoGrid {...args}>
        <Box label={1} data-testid="box" />
        <Box label={2} data-testid="box" />
        <Box label={3} data-testid="box" />
        <Box label={4} data-testid="box" />
        <Box label={5} data-testid="box" />
        <Box label={6} data-testid="box" />
        <Box label={7} data-testid="box" />
        <Box label={8} data-testid="box" />
        <Box label={9} data-testid="box" />
    </AutoGrid>
);

export const SimpleGrid = Template.bind({});
SimpleGrid.args = {
    cols: 2,
    rows: 5,
    flow: AutoGrid.flows.col,
};

export const AutoRows = Template.bind({});
AutoRows.args = {
    cols: 4,
    rows: "auto",
    flow: AutoGrid.flows.row,
};
AutoRows.parameters = {
    docs: {
        description: {
            story:
                "Note: Without specifying any fixed sizes, one gotcha is `flow` direction must match auto direction e.g. `flow=col` `col=auto`. As such,",
        },
    },
};

export const AutoColumns = Template.bind({});
AutoColumns.args = {
    cols: "auto",
    rows: 6,
    flow: AutoGrid.flows.col,
};
AutoColumns.parameters = {
    docs: {
        description: {
            story:
                "Note: Without specifying any fixed sizes, one gotcha is `flow` direction must match auto direction e.g. `flow=col` `col=auto`. As such,",
        },
    },
};
