import React, { useState, useRef } from "react";

import { Icon as MsIcon } from "./Icon";
import { useKeydown } from "../../utility/hooks";
import { ESC_KEY_CODE } from "../../utility/constants";
import iconSearch from "./Icon-search";

export default {
    title: "Elements/Icon",
    component: MsIcon,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            control: {
                type: "select",
            },
            options: Object.keys(MsIcon.names),
        },
        size: {
            name: "size",
            type: { name: "string" },
            control: {
                type: "radio",
            },
            options: Object.keys(MsIcon.sizes),
        },
    },
};

const Template = (args) => <MsIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
    name: MsIcon.names.close,
    size: MsIcon.sizes.md,
};

export const FullList = (args) => {
    let [filterVal, setFilterVal] = useState("");
    let copyTextarea = useRef(null);
    useKeydown((e) => {
        let isEscPressed = e.keyCode === ESC_KEY_CODE;

        if (isEscPressed) {
            setFilterVal("");
        }
    }, setFilterVal);

    let copyToClipboard = (e) => {
        if (!args.allowCopy) {
            return;
        }
        copyTextarea.current.value = e.currentTarget.outerHTML;
        copyTextarea.current.select();
        document.execCommand("copy");
    };

    let renderIconList = (LIST) => {
        let filteredList = [...LIST];
        if (filterVal) {
            filteredList = iconSearch(filterVal);
        }

        return filteredList.sort().map((icon, i) => {
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
                        isDisabled={args.isDisabled}
                        color={args.color}
                    />
                </div>
            );
        });
    };

    return (
        <div>
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
                        gridColumn: "span 6",
                    }}
                    onKeyDown={() => {}}
                    className="py-8 px-20 body-text lg border-neutral-4 rounded-20"
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
                {renderIconList(Object.keys(MsIcon.names), args)}
            </div>
        </div>
    );
};

FullList.argTypes = { name: { control: { disable: true } } };
