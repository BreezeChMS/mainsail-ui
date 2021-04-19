const path = require("path");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],

    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            utility: path.resolve(__dirname, "..", "src", "utility"),
            styles: path.resolve(__dirname, "..", "src", "styles"),
            components: path.resolve(__dirname, "..", "src", "components"),
        };

        // Return the altered config
        return config;
    },
};
