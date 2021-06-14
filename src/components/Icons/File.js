import * as React from "react";

function SvgFile(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14.815V16a3.934 3.934 0 002.827-1.216A4.233 4.233 0 008 11.852V.572a.571.571 0 10-1.143 0v11.28c0 .785-.302 1.538-.838 2.094A2.809 2.809 0 014 14.815zm-2.827-.031A3.934 3.934 0 004 16v-1.185a2.81 2.81 0 01-2.02-.869 3.023 3.023 0 01-.837-2.094V4.148c0-.655.511-1.185 1.143-1.185.631 0 1.143.53 1.143 1.185v5.947a.571.571 0 101.142 0V4.148c0-1.309-1.023-2.37-2.285-2.37C1.024 1.778 0 2.839 0 4.148v7.704a4.233 4.233 0 001.173 2.932z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgFile;
