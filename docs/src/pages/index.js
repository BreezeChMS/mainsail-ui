import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Logo from "@site/static/img/mainsail-ui.svg";
import HomepageFeatures from "../components/HomepageFeatures";
import "../../../src/components/core/index.scss";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Logo className={styles.mainLogo} />
                <p className="body-text lg text-blue-dark mb-20">
                    {siteConfig.tagline}
                </p>
                <div>
                    <Link
                        className="button-text bg-blue-primary text-white rounded py-6 px-12"
                        to="/docs/intro">
                        Get Started - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Let's Go! | ${siteConfig.title}`}
            description="Mainsail UI is the Official React UI Kit of Breeze">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
