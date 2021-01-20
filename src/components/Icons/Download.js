import * as React from "react";

function SvgDownload(props) {
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
                d="M17.4 22.47V.984C17.4.441 16.898 0 16.277 0c-.62 0-1.124.44-1.124.984v21.72L5.103 15.191c-.472-.351-1.18-.302-1.584.11-.402.413-.346 1.033.125 1.387l11.903 8.897c.21.159.468.236.73.236h-.001c.287 0 .574-.097.793-.287l10.222-8.895c.442-.384.445-1.007.006-1.392a1.238 1.238 0 00-1.59-.005L17.4 22.47zM30.642 32H1.911c-.621 0-1.125-.44-1.125-.984 0-.543.504-.984 1.125-.984h28.73c.621 0 1.125.44 1.125.984 0 .543-.504.984-1.125.984z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgDownload;
