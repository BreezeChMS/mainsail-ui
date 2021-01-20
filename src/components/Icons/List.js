import * as React from "react";

function SvgList(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 33 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.14 4.28a2.14 2.14 0 100-4.28 2.14 2.14 0 000 4.28zM10.7.94a1 1 0 100 2h20.33a1 1 0 100-2H10.7zM2.14 15.915a2.14 2.14 0 100-4.28 2.14 2.14 0 000 4.28zm8.56-3.34a1 1 0 100 2h20.33a1 1 0 000-2H10.7zM4.28 25.413a2.14 2.14 0 11-4.28 0 2.14 2.14 0 014.28 0zm5.42-.2a1 1 0 011-1h20.33a1 1 0 110 2H10.7a1 1 0 01-1-1z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgList;
