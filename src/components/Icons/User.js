import * as React from "react";

function SvgUser(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 27 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.873 7.68a5.68 5.68 0 11-11.36 0 5.68 5.68 0 0111.36 0zm2 0a7.68 7.68 0 11-15.36 0 7.68 7.68 0 0115.36 0zm3.003 15.411c1.263 2.31 1.223 5.104.987 6.909H2.086c-.192-1.81-.163-4.595 1.159-6.902 1.268-2.215 4.002-4.458 10.376-4.458 6.395 0 9.054 2.255 10.255 4.451zm2.935 7.423c-.13.888-.913 1.486-1.81 1.486H1.942c-.912 0-1.704-.616-1.815-1.522-.474-3.88-.341-13.838 13.493-13.838 13.878 0 13.752 10.02 13.19 13.874z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgUser;
