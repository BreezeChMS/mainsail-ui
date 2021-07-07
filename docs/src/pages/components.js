import React from "react";
import styles from "./components.module.css";

export default function Components() {
    return (
        <iframe
            name="storybook"
            className={styles.responsiveIframe}
            src="https://master--6000b9fe63cdbd0021082b92.chromatic.com"
        />
    );
}
