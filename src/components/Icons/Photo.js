import * as React from "react";

function SvgPhoto(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29 2H3a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V3a1 1 0 00-1-1zM3 0a3 3 0 00-3 3v26a3 3 0 003 3h26a3 3 0 003-3V3a3 3 0 00-3-3H3zm5.5 10.25a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm0 1.75a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm4.177 3.446a.875.875 0 00-1.405.069l-7 10.5A.875.875 0 005 27.375h22a.875.875 0 00.659-1.451l-7-8a.875.875 0 00-1.228-.088l-2.82 2.417-3.934-4.807zM6.635 25.625l5.437-8.155 3.75 4.584a.875.875 0 001.247.11l2.843-2.436 5.16 5.897H6.635z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgPhoto;
