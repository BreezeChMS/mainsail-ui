import { memo, useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";

/**
 * WithPortal - render a component to the root of the dom
 */
const Portal = ({ id, className, children }) => {
    const el = useRef(
        document.getElementById(id) || document.createElement("div")
    );
    let currentElement = el.current;
    const [dynamic] = useState(!currentElement.parentElement);

    className && currentElement.classList.add(className);

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

/**
 *  useKeydown - detect keypress and respond via a provided callback
 */
export const useKeydown = (callback) => {
    useEffect(() => {
        document.body.addEventListener("keydown", callback);

        return () => {
            document.body.removeEventListener("keydown", callback);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

/**
 *  useUniqueId - helps generate a unique id for client-side component rendering (useful for aria-roles)
 */
let idCounter = 0;
export const useUniqueId = (prefix) => {
    const id = useMemo(() => idCounter++, []);
    return `${prefix}${id}`;
};
