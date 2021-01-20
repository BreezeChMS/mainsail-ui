import * as React from "react";

function SvgView(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M14.954 18.295a1 1 0 001.413 0L31.79 2.87s.601-.863-.235-1.7c-.837-.838-1.57 0-1.57 0L15.634 15.523 1.96 1.85s-.857-.711-1.62.053c-.764.762 0 1.829 0 1.829l14.614 14.563z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgView;
