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
export const useKeydown = (callback, deps = []) => {
    useEffect(() => {
        document.body.addEventListener("keydown", callback);

        return () => {
            document.body.removeEventListener("keydown", callback);
        };
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

/**
 *  useUniqueId - helps generate a unique id for client-side component rendering (useful for aria-roles)
 */
let idCounter = 0;
export const useUniqueId = (prefix) => {
    const id = useMemo(() => idCounter++, []);
    return `${prefix}${id}`;
};

/**
 * useOnClickOutside - Detect clicks outside your specified element
 * Adapted from: https://usehooks.com/useOnClickOutside/
 *
 * NOTE: This will be called every render unless you wrap your handler in
 * a useCallback fn prior to passing into this hook
 */
export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref || !ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};
