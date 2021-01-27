import * as React from "react";

function SvgCancel(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 16c0 7.732-6.268 14-14 14a13.943 13.943 0 01-8.896-3.19L26.81 7.105A13.943 13.943 0 0130 16zM5.654 25.432L25.432 5.654A13.95 13.95 0 0016 2C8.268 2 2 8.268 2 16a13.95 13.95 0 003.654 9.432zM32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgCancel;
