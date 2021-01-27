import * as React from "react";

function SvgChartBar(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.742 2h3.226v20.774h-3.226V2zm-2 0a2 2 0 012-2h3.226a2 2 0 012 2v20.774a2 2 0 01-2 2h-3.226a2 2 0 01-2-2V2zm-6.13 3.097h-3.225v17.677h3.226V5.097zm-3.225-2a2 2 0 00-2 2v17.677a2 2 0 002 2h3.226a2 2 0 002-2V5.097a2 2 0 00-2-2h-3.226zM3.032 10.258h3.226v12.516H3.032V10.258zm-2 0a2 2 0 012-2h3.226a2 2 0 012 2v12.516a2 2 0 01-2 2H3.032a2 2 0 01-2-2V10.258zM1 26.903a1 1 0 100 2h30a1 1 0 100-2H1z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgChartBar;
