import * as React from "react";

function SvgUnderline(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.97 11.392a6.695 6.695 0 0011.434-4.728V.558a.559.559 0 00-1.117 0v6.106a5.582 5.582 0 01-11.163 0V.558a.559.559 0 00-1.117 0v6.099c0 1.776.706 3.48 1.962 4.735zM.557 16h12.279a.559.559 0 000-1.116H.558a.559.559 0 000 1.116z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgUnderline;
