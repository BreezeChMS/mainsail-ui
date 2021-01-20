import * as React from "react";

function SvgCalendar(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M27.554 2.668h-2.668V.888a.889.889 0 00-1.778 0v1.78H8.888V.888a.889.889 0 00-1.778 0v1.78H4.445A4.45 4.45 0 000 7.113v20.442A4.45 4.45 0 004.445 32h23.109A4.451 4.451 0 0032 27.555l-.002-16V7.11a4.45 4.45 0 00-4.444-4.442zm2.665 24.884a2.668 2.668 0 01-2.665 2.664H4.444a2.668 2.668 0 01-2.667-2.664V11.555h28.441v15.997zm0-17.775H1.777V7.11a2.67 2.67 0 012.668-2.668h2.668v.89a.887.887 0 101.775 0v-.887h14.22v.889a.889.889 0 101.778 0v-.889h2.668a2.667 2.667 0 012.665 2.665v2.667z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgCalendar;
