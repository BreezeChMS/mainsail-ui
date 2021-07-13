import React, { useEffect } from "react";
import styles from "./components.module.css";

export default function Components() {
    // Forward any storybook query strings to the iframe for storybook
    useEffect(() => {
        if (window) {
            let params = new URLSearchParams(window.location.search);

            let iframe = document.getElementById("storybook");

            if (iframe && params.get("path")) {
                console.log(params.get("path"));
                iframe.src =
                    "https://master--6000b9fe63cdbd0021082b92.chromatic.com/?path=" +
                    params.get("path");
            }
        }
    }, []);

    return (
        <iframe
            id="storybook"
            name="storybook"
            className={styles.responsiveIframe}
            src="https://master--6000b9fe63cdbd0021082b92.chromatic.com"
        />
    );
}
