import * as React from "react";
const SvgEmoji = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm.97 3.494c.033-.271-.192-.494-.465-.494-.274 0-.492.223-.533.493a3.487 3.487 0 0 1-1.137 2.059c-.752.677-1.772 1.057-2.835 1.057s-2.083-.38-2.835-1.057a3.487 3.487 0 0 1-1.137-2.059c-.041-.27-.26-.493-.533-.493s-.498.223-.465.494c.124 1.012.627 1.961 1.434 2.688C5.402 12.526 6.674 13 8 13s2.598-.474 3.536-1.318c.807-.727 1.31-1.676 1.434-2.688Z"
            fill="currentColor"
        />
    </svg>
);
export default SvgEmoji;
