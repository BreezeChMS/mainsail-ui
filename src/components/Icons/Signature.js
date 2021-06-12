import * as React from "react";

function SvgSignature(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M15.823 3.958L12.043.177a.64.64 0 00-.883 0l-3.84 3.84-5.03 1.672a.919.919 0 00-.612.7L.013 15.107a.75.75 0 00.882.88l8.716-1.663a.924.924 0 00.7-.613l1.673-5.03 1.934-1.932.015-.016.015-.016 1.877-1.874a.628.628 0 00-.001-.884zM9.48 13.433a.043.043 0 01-.033.03l-7.774 1.484 3.69-3.691a.436.436 0 000-.62.436.436 0 00-.619 0l-3.69 3.692 1.483-7.774a.045.045 0 01.028-.033L7.437 4.9 11.1 8.564l-1.62 4.869zm2.12-5.608L8.174 4.399l1.403-1.404 3.426 3.426L11.6 7.825zm2.022-2.022l-3.426-3.426L11.6.975 15.026 4.4l-1.404 1.403z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgSignature;
