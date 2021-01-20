import * as React from "react";

function SvgSearch(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M12.527 0C5.634 0 .019 5.786.019 12.888s5.615 12.888 12.508 12.888c2.98 0 5.718-1.085 7.872-2.888l8.464 8.721a1.27 1.27 0 001.833 0 1.349 1.349 0 000-1.875l-8.464-8.721a13.068 13.068 0 002.803-8.125C25.035 5.786 19.42 0 12.527 0zm0 2.667c5.494 0 9.92 4.56 9.92 10.221 0 5.661-4.426 10.222-9.92 10.222s-9.92-4.56-9.92-10.222c0-5.66 4.426-10.221 9.92-10.221z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgSearch;
