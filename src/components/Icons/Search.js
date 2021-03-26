import * as React from "react";

function SvgSearch(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M6.472 1C3.457 1 1 3.532 1 6.639s2.457 5.638 5.472 5.638a5.344 5.344 0 003.444-1.264l3.704 3.816c.22.228.58.228.802 0a.59.59 0 000-.82l-3.704-3.816a5.718 5.718 0 001.227-3.554C11.945 3.532 9.488 1 6.472 1zm0 1.167c2.404 0 4.34 1.995 4.34 4.472 0 2.476-1.936 4.472-4.34 4.472-2.403 0-4.34-1.996-4.34-4.472 0-2.477 1.937-4.472 4.34-4.472z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgSearch;
