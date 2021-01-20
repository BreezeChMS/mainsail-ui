import * as React from "react";

function SvgTagFill(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.436 17.436l9.733 9.733a2 2 0 002.74.083l15.417-13.655A2 2 0 0030 12.1V2a2 2 0 00-2-2H17.31a2 2 0 00-1.392.564L1.458 14.586a2 2 0 00-.022 2.85zM25 7a2 2 0 11-4 0 2 2 0 014 0z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgTagFill;
