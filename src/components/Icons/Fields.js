import * as React from "react";

function SvgFields(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 0a1 1 0 000 2h23a1 1 0 011 1v23a1 1 0 102 0V3a3 3 0 00-3-3H5zm18 7H3a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V8a1 1 0 00-1-1zM3 5a3 3 0 00-3 3v20a3 3 0 003 3h20a3 3 0 003-3V8a3 3 0 00-3-3H3zm7.993 17.204l8.967-10.813a1.09 1.09 0 011.52-.15c.462.373.53 1.045.152 1.5l-9.724 11.726a1.091 1.091 0 01-1.6.079l-5.402-5.33a1.058 1.058 0 010-1.508 1.093 1.093 0 011.53 0l4.557 4.497z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgFields;
