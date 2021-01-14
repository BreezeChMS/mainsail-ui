import React from "react";

import { Icon as MainsailIcon, ICON_LIST } from "./Icon";

export default {
    title: "Mainsail UI/Icon",
    component: MainsailIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            width: "200px",
            control: {
                type: "select",
                options: ICON_LIST,
            },
        },
    },
};

const Template = (args) => <MainsailIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: "close",
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
                        justifyContent: "flex-start",
                        marginBottom: "8px",
                    }}>
                    <div
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            marginBottom: "4px",
                        }}>
                        {icon}
                    </div>
                    <Icon name={icon} />
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
            {renderIconList(ICON_LIST)}
        </div>
    );
};
