import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
    {
        title: "Easy to Use",
        Svg: null,
        description: (
            <>
                Mainsail strives to be flexible but intuitive, containing
                sensible defaults with escape hatches when necessary.
            </>
        ),
    },
    {
        title: "Build Faster",
        Svg: null,
        description: (
            <>
                Spend less time styling and more time building the UI with our
                pre-styled components.
            </>
        ),
    },
    {
        title: "Breeze-styled",
        Svg: null,
        description: (
            <>
                Components are styled to the Breeze UI design system. CSS
                utility classes are also available.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {Svg && <Svg className={styles.featureSvg} alt={title} />}
            </div>
            <div className="text--left padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
