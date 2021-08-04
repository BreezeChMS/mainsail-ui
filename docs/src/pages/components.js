import React, { useEffect } from "react";
import styles from "./components.module.css";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Components() {
    const { siteConfig } = useDocusaurusContext();
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
        <Layout
            title={`${siteConfig.title}`}
            description="Mainsail UI is the Official React UI Kit of Breeze">
            <iframe
                style={{ paddingTop: "60px" }}
                id="storybook"
                name="storybook"
                className={styles.responsiveIframe}
                src="https://master--6000b9fe63cdbd0021082b92.chromatic.com"
            />
        </Layout>
    );
}
