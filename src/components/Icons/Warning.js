import * as React from "react";

function SvgWarning(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.902 2.384a.873.873 0 00.873-.853l.152-6.486a1.021 1.021 0 10-2.042 0l.145 6.485c.01.475.398.854.872.854zm-.796 1.796a1.04 1.04 0 00-.302.767c0 .3.098.55.294.751.196.201.473.302.832.302.36 0 .637-.1.833-.302.196-.201.294-.452.294-.751 0-.31-.1-.566-.302-.767-.201-.207-.476-.31-.825-.31-.348 0-.623.103-.824.31z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgWarning;
