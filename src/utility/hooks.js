import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ id, children }) => {
    const el = useRef(
        document.getElementById(id) || document.createElement("div")
    );
    let currentElement = el.current;
    const [dynamic] = useState(!currentElement.parentElement);

    useEffect(() => {
        if (dynamic) {
            currentElement.id = id;
            document.body.appendChild(currentElement);
        }
        return () => {
            if (dynamic && currentElement.parentElement) {
                currentElement.parentElement.removeChild(currentElement);
            }
        };
    }, [id, dynamic, currentElement]);
    return createPortal(children, el.current);
};
export const WithPortal = memo(Portal);
