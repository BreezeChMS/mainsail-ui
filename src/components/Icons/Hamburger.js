import * as React from "react";

function SvgHamburger(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M.993 9.935a.994.994 0 010-1.987h22.01a.994.994 0 010 1.987H.994zm.077 7.948a.993.993 0 110-1.987h21.936a.993.993 0 110 1.987H1.07zm0-15.896A.993.993 0 111.07 0h21.936a.993.993 0 110 1.987H1.07z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgHamburger;
