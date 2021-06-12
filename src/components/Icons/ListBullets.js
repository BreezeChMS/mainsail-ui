import * as React from "react";

function SvgListBullets(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.069 2.138a1.069 1.069 0 100-2.138 1.069 1.069 0 000 2.138zM5.345.469a.5.5 0 100 1h10.156a.5.5 0 100-1H5.345zM1.069 7.951a1.069 1.069 0 100-2.138 1.069 1.069 0 000 2.138zm4.276-1.669a.5.5 0 100 1h10.156a.5.5 0 100-1H5.345zm-3.207 6.412a1.069 1.069 0 11-2.138 0 1.069 1.069 0 012.138 0zm2.708-.1a.5.5 0 01.499-.5h10.156a.5.5 0 010 1H5.345a.5.5 0 01-.5-.5z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgListBullets;
