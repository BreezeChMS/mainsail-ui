import React, { useState, useRef } from "react";

import { Icon as MsIcon, ENUMS } from "./Icon";

export default {
    title: "Elements/Icon",
    component: MsIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            control: {
                type: "select",
                options: Object.keys(ENUMS.names),
            },
        },
        size: {
            name: "size",
            type: { name: "string" },
            control: {
                type: "radio",
                options: Object.keys(ENUMS.sizes),
            },
        },
    },
};

const Template = (args) => <MsIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: ENUMS.names.close,
    size: ENUMS.sizes.md,
};

export const FullList = (args) => {
    let [filterVal, setFilterVal] = useState("");
    let copyTextarea = useRef(null);
    let filterIcons = (icon) =>
        filterVal ? new RegExp(filterVal, "g").test(icon) : icon;

    let copyToClipboard = (e) => {
        if (!args.allowCopy) {
            return;
        }
        copyTextarea.current.value = e.currentTarget.outerHTML;
        copyTextarea.current.select();
        document.execCommand("copy");
    };

    let renderIconList = (LIST) =>
        LIST.filter(filterIcons).map((icon, i) => {
            return (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "4px",
                        transition: "all 0.5s",
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
                    <Template
                        onClick={(e) => copyToClipboard(e, icon)}
                        name={icon}
                        size={args.size}
                        disabled={args.isDisabled}
                        color={args.color}
                    />
                </div>
            );
        });

    return (
        <div>
            {/* {copiedNotice ? (
                <span style={{ marginBottom: "20px" }}>{copiedNotice}</span>
            ) : null} */}
            <div
                style={{
                    fontFamily: "sans-serif",
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "auto auto auto auto auto auto",
                }}>
                <input
                    style={{
                        width: "100%",
                        fontSize: 12,
                        borderRadius: "4px",
                        padding: "4px 8px",
                        border: "1px solid #ccc",
                        gridColumn: "span 6",
                    }}
                    value={filterVal}
                    onChange={({ target }) => setFilterVal(target.value)}
                    placeholder="Filter by Icon Name"
                />

                {args.allowCopy ? (
                    <textarea
                        ref={copyTextarea}
                        readOnly
                        style={{
                            borderRadius: "4px",
                            gridColumnStart: "span 6",
                            border: "1px solid #ccc",
                            fontSize: 12,
                            color: "#ccc",
                        }}
                        defaultValue="Click icon to display/copy src"></textarea>
                ) : null}
                {renderIconList(Object.keys(ENUMS.names), args)}
            </div>
        </div>
    );
};

FullList.argTypes = { name: { control: { disable: true } } };
