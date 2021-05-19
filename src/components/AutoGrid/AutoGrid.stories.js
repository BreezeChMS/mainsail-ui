/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import _ from "lodash";

import { Button } from "components/Button";
import { AutoGrid, AutoGridItem as Item } from "./AutoGrid";
import { FormControl, FormLabel, Input, Transition } from "components/core";

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
            options: Object.values(AutoGrid.flows),
        },
        gapRow: {
            name: "gapRow",
            type: { gapRow: "string" },
            control: {
                type: "select",
            },
            options: Object.values(AutoGrid.gaps),
        },
        gapCol: {
            name: "gapCol",
            type: { gapCol: "string" },
            control: {
                type: "select",
            },
            options: Object.values(AutoGrid.gaps),
        },
        gap: {
            name: "gap",
            type: { gap: "string" },
            control: {
                type: "select",
            },
            options: Object.values(AutoGrid.gaps),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A quick & easy automatic grid solution using CSS Grid
                \n- supply column count with \`cols\` & row count with \`rows\`
                \n- specify auto count of columns or rows (Note: \`flow\` direction must match auto direction e.g. \`flow=col\` \`col=auto\`)
                \n- Optional subcomponent **AutoGridItem** can specify col/row span for children (also accessible as \`AutoGrid.Item\`)
                \n- Can have different row (\`gapRow\`) and column gaps (\`gapCol\`) or one singular prop to control both (\`gap\`)
                `,
            },
        },
    },
};

const itemStyle = {
    color: "white",
    fontFamily: "sans-serif",
    borderRadius: "8px",
    minHeight: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const AutoGridItem = (props) => {
    return (
        <Item
            className="bg-blue-light text-blue-dark"
            style={itemStyle}
            {...props}>
            <span>{props.children}</span>
        </Item>
    );
};

const Template = (args) => (
    <AutoGrid {...args}>
        <AutoGridItem data-testid="box">1</AutoGridItem>
        <AutoGridItem data-testid="box">2</AutoGridItem>
        <AutoGridItem data-testid="box">3</AutoGridItem>
        <AutoGridItem data-testid="box">4</AutoGridItem>
        <AutoGridItem data-testid="box">5</AutoGridItem>
        <AutoGridItem data-testid="box">6</AutoGridItem>
        <AutoGridItem data-testid="box">7</AutoGridItem>
        <AutoGridItem data-testid="box">8</AutoGridItem>
        <AutoGridItem data-testid="box">9</AutoGridItem>
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
            <AutoGridItem data-testid="box">{i + 1}</AutoGridItem>
        </Transition>
    ));

    return (
        <>
            <AutoGrid cols={2} rows={1} gap={10}>
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
    gap: 20,
    flow: AutoGrid.flows.row,
};

export const Responsive = Template.bind({});
Responsive.args = {
    cols: [1, 2, 3],
    rows: 3,
    gap: 20,
    flow: AutoGrid.flows.row,
};
Responsive.parameters = {
    docs: {
        description: {
            story:
                "`<AutoGrid/>` `rows` and `cols` can be supplied an array of row/col counts to use at `sm`, `md`, and `lg` breakpoints. For Example, this grid will break down to 1 col at small, 2 cols at md and 3 cols at lg+",
        },
    },
};

export const Spanning = (args) => {
    return (
        <AutoGrid {...args} flow={AutoGrid.flows.col} rows={3}>
            <AutoGridItem rowSpan={3} data-testid="box">
                1
            </AutoGridItem>
            <AutoGridItem colSpan={2} data-testid="box">
                2
            </AutoGridItem>
            <AutoGridItem colSpan={2} rowSpan={2} data-testid="box">
                3
            </AutoGridItem>
        </AutoGrid>
    );
};
Spanning.args = {
    rows: 3,
    cols: 3,
    gap: 20,
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
    gap: 20,
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

export const Nested = () => {
    return (
        <div>
            <AutoGrid
                rows={2}
                cols={[6, 12]}
                flow="col"
                gapRow={10}
                className="mb-48 w-full">
                <AutoGrid
                    rows="auto"
                    colSpan={6}
                    gapRow={10}
                    gapCol={20}
                    cols={[1, 2]}>
                    <>
                        <FormControl colSpan={1}>
                            <FormLabel text="First Name" />
                            <Input />
                        </FormControl>
                        <FormControl colSpan={1}>
                            <FormLabel text="Last Name" />
                            <Input />
                        </FormControl>
                    </>
                </AutoGrid>
                <FormControl colSpan={6}>
                    <FormLabel text="Something Longer" />
                    <Input />
                </FormControl>
            </AutoGrid>
        </div>
    );
};
Nested.parameters = {
    docs: {
        description: {
            story:
                "This example uses a nested `<AutoGrid/>` pattern. The parent AutoGrid supplies a full 12 col distance to span and a row gap (`gapRow`). The nested AutoGrid supplies two columns that in total take up 4 columns of the parent. A specified column gap in `gapCol`. Responsive array `cols` prop can also be combined to achieve responsive column counts at different breakpoints.",
        },
    },
};
