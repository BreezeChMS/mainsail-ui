/* eslint-disable react/prop-types */
import React, { useState } from "react";
import _ from "lodash";

import { Button } from "components/Button";
import { AutoGrid } from "./AutoGrid";
import { Transition } from "components/Transition";

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

const AdjustableTemplate = (args) => {
    const [boxCount, setBoxCount] = useState(9);
    const boxArray = _.times(boxCount, (i) => (
        <Transition
            animation={Transition.animations.fadeSlideDown}
            isActive
            shouldAppearOnMount>
            <Box label={i + 1} data-testid="box" />
        </Transition>
    ));

    return (
        <>
            <AutoGrid cols={2} rows={1}>
                <Button
                    variant="secondary"
                    onClick={() => setBoxCount(boxCount - 1)}
                    text="Remove Box"
                    className="mb-20"
                    isDisabled={boxCount === 1}
                />
                <Button
                    variant="secondary"
                    onClick={() => setBoxCount(boxCount + 1)}
                    text="Add Box"
                    className="mb-20"
                />
            </AutoGrid>
            <AutoGrid {...args}>{boxArray}</AutoGrid>
        </>
    );
};

export const SimpleGrid = Template.bind({});
SimpleGrid.args = {
    cols: 2,
    rows: 5,
    flow: AutoGrid.flows.col,
};

export const AutoRows = AdjustableTemplate.bind({});
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

export const AutoColumns = AdjustableTemplate.bind({});
AutoColumns.args = {
    cols: "auto",
    rows: 6,
    gap: 16,
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

export const Nested = (args) => {
    return (
        <AutoGrid {...args}>
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
            <AutoGrid {...args}>
                <Box label={1} data-testid="box" className="bg-blue-light" />
                <Box label={2} data-testid="box" className="bg-blue-light" />
                <Box label={3} data-testid="box" className="bg-blue-light" />
                <Box label={4} data-testid="box" className="bg-blue-light" />
                <Box label={5} data-testid="box" className="bg-blue-light" />
                <Box label={6} data-testid="box" className="bg-blue-light" />
                <Box label={7} data-testid="box" className="bg-blue-light" />
                <Box label={8} data-testid="box" className="bg-blue-light" />
                <Box label={9} data-testid="box" className="bg-blue-light" />
            </AutoGrid>
            <AutoGrid {...args}>
                <Box label={1} data-testid="box" className="bg-blue-dark" />
                <Box label={2} data-testid="box" className="bg-blue-dark" />
                <Box label={3} data-testid="box" className="bg-blue-dark" />
                <Box label={4} data-testid="box" className="bg-blue-dark" />
                <Box label={5} data-testid="box" className="bg-blue-dark" />
                <Box label={6} data-testid="box" className="bg-blue-dark" />
                <Box label={7} data-testid="box" className="bg-blue-dark" />
                <Box label={8} data-testid="box" className="bg-blue-dark" />
                <Box label={9} data-testid="box" className="bg-blue-dark" />
            </AutoGrid>
        </AutoGrid>
    );
};
