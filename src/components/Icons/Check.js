import * as React from "react";

function SvgCheck(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 36 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M2 16.318l10.196 8.168L34 2"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgCheck;
