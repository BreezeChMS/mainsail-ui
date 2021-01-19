const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    externals: [
        // nodeExternals({
        //     options: {
        //         allowList: ["react-svg"],
        //     },
        // }),
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/icons", to: "icons" },
                { from: path.resolve(__dirname, "package.json") },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: path.resolve(__dirname, "dist/assets"),
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "./src"),
            },
        ],
    },
};
