import * as React from "react";

function SvgNotes(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.666 1a1 1 0 10-2 0v1h-4.332V1a1 1 0 10-2 0v1H6V1a1 1 0 00-2 0v1H2a2 2 0 00-2 2v26a2 2 0 002 2h24a2 2 0 002-2V4a2 2 0 00-2-2h-2V1a1 1 0 10-2 0v1h-3.334V1zM22 5V4h-3.334v1a1 1 0 11-2 0V4h-4.332v1a1 1 0 11-2 0V4H6v1a1 1 0 01-2 0V4H2v26h24V4h-2v1a1 1 0 11-2 0zM6 10a1 1 0 100 2h16a1 1 0 100-2H6zm-1 8a1 1 0 011-1h16a1 1 0 110 2H6a1 1 0 01-1-1zm1 6a1 1 0 100 2h16a1 1 0 100-2H6z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgNotes;
