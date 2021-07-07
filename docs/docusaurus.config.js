const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Mainsail UI",
    tagline: "The React UI kit of Breeze",
    url: "https://mainsail-ui.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "BreezeChMS",
    projectName: "mainsail-ui",
    themeConfig: {
        navbar: {
            logo: {
                alt: "Mainsail UI Logo",
                src: "img/mainsail-ui.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Guides",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/BreezeChMS/mainsail-ui",
                    label: "GitHub",
                    position: "right",
                },
                {
                    href: "/components",
                    label: "Components",
                    position: "left",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Usage",
                            to: "/docs/intro",
                        },
                        {
                            label: "Development",
                            to: "/docs/intro",
                        },
                        {
                            to: "/components",
                            label: "Components",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/BreezeChMS/mainsail-ui",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Breeze.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
