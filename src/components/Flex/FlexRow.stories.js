/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { FlexRow, FlexCol } from "./Flex";

export default {
    title: "Layout/Flex/FlexRow",
    component: FlexRow,
    argTypes: {
        justifyContent: {
            name: "justifyContent",
            type: { justifyContent: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexRow.justifyContent),
        },
        alignItems: {
            name: "alignItems",
            type: { alignItems: "string" },
            control: {
                type: "select",
            },
            options: Object.values(FlexRow.alignItems),
        },
    },
    parameters: {
        docs: {
            description: {
                component: `A \`<FlexRow/>\` is a wrapping element of \`<FlexCol/>\`
                `,
            },
        },
    },
};
const colStyle = { height: "80px" };
const rowStyle = { height: "100px" };
const Template = (args) => {
    const [colWidth, setColWidth] = useState(8);

    return (
        <div>
            <span className="body-text">
                Control the dark blue <code>FlexRow</code> with params
            </span>
            <FlexRow
                {...args}
                style={rowStyle}
                className="border border-blue-light bg-blue-dark p-10">
                <FlexCol
                    className="border border-blue-light bg-blue-primary"
                    sm={6}
                    style={colStyle}></FlexCol>
                <FlexCol
                    className="border border-blue-light bg-blue-primary"
                    sm={colWidth}
                    alignItems={FlexCol.alignItems.center}
                    justifyContent={FlexCol.justifyContent.center}
                    style={colStyle}>
                    <label className="body-text text-white">
                        Adjust col width (1-12)
                        <input
                            className="ml-8"
                            value={colWidth}
                            onChange={(e) =>
                                setColWidth(parseInt(e.target.value))
                            }
                        />
                    </label>
                </FlexCol>
            </FlexRow>
        </div>
    );
};

export const Basic = Template.bind({});
Basic.args = {
    shouldWrap: true,
    alignItems: FlexRow.alignItems.flexStart,
    justifyContent: FlexRow.justifyContent.flexStart,
};
