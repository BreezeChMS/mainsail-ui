import * as React from "react";

function SvgCheck(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M1 9.264l4.46 3.574L15 3"
                stroke="currentColor"
                strokeWidth={1.531}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgCheck;
