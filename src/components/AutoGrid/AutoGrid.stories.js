/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import _ from "lodash";

import { Button } from "components/Button";
import { AutoGrid, AutoGridItem as Item } from "./AutoGrid";
import { Transition } from "components/Transition";

export default {
    title: "Layout/Grid/AutoGrid",
    component: AutoGrid,
    subcomponents: { AutoGridItem: Item },
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
                \n- Subcomponent **AutoGridItem** can specify col/row span for children (also accessible as \`AutoGrid.Item\`)
                `,
            },
        },
    },
};

const AutoGridItem = (props) => {
    return (
        <Item
            className="bg-blue-light text-blue-dark"
            style={{
                color: "white",
                fontFamily: "sans-serif",
                borderRadius: "8px",
                minHeight: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            {...props}>
            <span>{props.label}</span>
        </Item>
    );
};

const Template = (args) => (
    <AutoGrid {...args}>
        <AutoGridItem label={1} data-testid="box" />
        <AutoGridItem label={2} data-testid="box" />
        <AutoGridItem label={3} data-testid="box" />
        <AutoGridItem label={4} data-testid="box" />
        <AutoGridItem label={5} data-testid="box" />
        <AutoGridItem label={6} data-testid="box" />
        <AutoGridItem label={7} data-testid="box" />
        <AutoGridItem label={8} data-testid="box" />
        <AutoGridItem label={9} data-testid="box" />
    </AutoGrid>
);

const AdjustableTemplate = (args) => {
    const [boxCount, setBoxCount] = useState(9);
    const boxArray = _.times(boxCount, (i) => (
        <Transition
            key={i}
            animation={Transition.animations.fadeSlideRight}
            isActive
            shouldAnimateOnMount>
            <AutoGridItem label={i + 1} data-testid="box" />
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
    cols: 3,
    rows: 3,
    flow: AutoGrid.flows.col,
};

export const Spanning = (args) => {
    return (
        <AutoGrid {...args} flow={AutoGrid.flows.col} rows={3}>
            <AutoGridItem label={1} rowSpan={3} data-testid="box" />
            <AutoGridItem label={2} colSpan={2} data-testid="box" />
            <AutoGridItem label={3} colSpan={2} rowSpan={2} data-testid="box" />
        </AutoGrid>
    );
};
Spanning.parameters = {
    docs: {
        description: {
            story:
                "`<AutoGrid.Item/>` or `<AutoGridItem/>` can be used to specify a span in `rows` and/or `columns`",
        },
    },
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
                <AutoGridItem label={1} data-testid="box" />
                <AutoGridItem label={2} data-testid="box" />
                <AutoGridItem label={3} data-testid="box" />
                <AutoGridItem label={4} data-testid="box" />
                <AutoGridItem label={5} data-testid="box" />
                <AutoGridItem label={6} data-testid="box" />
                <AutoGridItem label={7} data-testid="box" />
                <AutoGridItem label={8} data-testid="box" />
                <AutoGridItem label={9} data-testid="box" />
            </AutoGrid>
            <AutoGrid {...args}>
                <AutoGridItem
                    label={1}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={2}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={3}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={4}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={5}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={6}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={7}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={8}
                    data-testid="box"
                    className="bg-blue-light"
                />
                <AutoGridItem
                    label={9}
                    data-testid="box"
                    className="bg-blue-light"
                />
            </AutoGrid>
            <AutoGrid {...args}>
                <AutoGridItem
                    label={1}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={2}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={3}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={4}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={5}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={6}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={7}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={8}
                    data-testid="box"
                    className="bg-blue-dark"
                />
                <AutoGridItem
                    label={9}
                    data-testid="box"
                    className="bg-blue-dark"
                />
            </AutoGrid>
        </AutoGrid>
    );
};
