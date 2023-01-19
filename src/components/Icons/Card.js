import * as React from "react";
const SvgCard = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            d="M29 0H3C1.35 0 0 1.35 0 3v15c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3ZM3 2h26c.55 0 1 .45 1 1v2H2V3c0-.55.45-1 1-1Zm26 17H3c-.55 0-1-.45-1-1V7h28v11c0 .55-.45 1-1 1Z"
            fill="currentColor"
        />
    </svg>
);
export default SvgCard;
