import React from "react";

import { Icon as MainsailIcon, ICON_LIST } from "./Icon";

export default {
    title: "Mainsail UI/Icon",
    component: MainsailIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            control: {
                type: "select",
                options: ICON_LIST,
            },
        },
        size: {
            name: "size",
            type: { name: "string" },
            control: {
                type: "radio",
                options: ["sm", "md", "lg"],
            },
        },
    },
};

const Template = (args) => <MainsailIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: "add",
    size: "md",
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
                            color: "#333",
                        }}>
                        <pre
                            style={{
                                padding: "2px 4px",
                                background: "#f4f4f4",
                                borderRadius: "4px",
                            }}>
                            {icon && icon.toLowerCase()}
                        </pre>
                    </div>
                    <Icon name={icon} size={args.size} />
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
            {renderIconList(ICON_LIST, args)}
        </div>
    );
};
