import * as React from "react";

function SvgTask(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 2h20a1 1 0 011 1v20a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zM0 3a3 3 0 013-3h20a3 3 0 013 3v20a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm19.96 3.39l-8.967 10.814-4.558-4.496a1.093 1.093 0 00-1.529 0 1.058 1.058 0 000 1.508l5.402 5.33c.453.445 1.195.409 1.6-.079l9.724-11.725a1.056 1.056 0 00-.152-1.5 1.09 1.09 0 00-1.52.149z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgTask;
