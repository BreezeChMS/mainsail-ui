import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./components.module.css";

export default function Components() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <iframe
            name="storybook"
            className={styles.responsiveIframe}
            src="https://master--6000b9fe63cdbd0021082b92.chromatic.com"
        />
    );
}
