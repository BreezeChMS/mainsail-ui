const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Mainsail UI",
    tagline: "The React UI kit of Breeze",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "BreezeChMS", // Usually your GitHub org/user name.
    projectName: "mainsail-ui", // Usually your repo name.
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
                    href: "https://github.com/BreezeChMS/mainsail-u",
                    label: "GitHub",
                    position: "right",
                },
                {
                    href: "https://mainsail-ui.com/components",
                    label: "Components",
                    position: "left",
                },
                // {
                //     type: "doc",
                //     docId: "utility-classes",
                //     position: "left",
                //     label: "Utility Classes",
                // },
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
                            href: "https://github.com/facebook/docusaurus",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Breeze. Built with Docusaurus.`,
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
