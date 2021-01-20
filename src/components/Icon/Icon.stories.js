import React from "react";

import { Icon as MsIcon, names, sizes } from "./Icon";

export default {
    title: "Mainsail UI/Icon",
    component: MsIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            control: {
                type: "select",
                options: Object.keys(names),
            },
        },
        size: {
            name: "size",
            type: { name: "string" },
            control: {
                type: "radio",
                options: Object.keys(sizes),
            },
        },
    },
};

const Template = (args) => <MsIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: names.close,
    size: sizes.md,
};

export const FullList = (args) => {
    let renderIconList = (LIST) =>
        LIST.map((icon, i) => {
            return (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "4px",
                    }}>
                    <div
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "10px",
                            marginBottom: "4px",
                        }}>
                        <pre
                            style={{
                                padding: "2px 4px",
                                background: "#f4f4f4",
                                borderRadius: "4px",
                            }}>
                            {icon && icon}
                        </pre>
                    </div>
                    <MsIcon
                        name={icon}
                        size={args.size}
                        style={{
                            color: "#003462",
                        }}
                    />
                </div>
            );
        });
    return (
        <div
            style={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "auto auto auto auto auto",
            }}>
            {renderIconList(Object.keys(names), args)}
        </div>
    );
};
