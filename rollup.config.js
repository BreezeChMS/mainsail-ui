import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";

import pkg from "./package.json";

const path = require("path");
const customResolver = resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});
const projectRootDir = path.resolve(__dirname);

export default {
    input: "src/index.js",
    output: [
        {
            name: "mainsail-ui",
            sourcemap: true,
            file: pkg.main,
            format: "umd",
            globals: {
                lodash: "_",
                react: "React",
            },
        },
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            use: ["sass"],
            config: {
                path: "./postcss.config.js",
            },
            minimize: true,
            inject: {
                insertAt: "bottom",
            },
        }),
        babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
        alias({
            entries: [
                {
                    find: "utility",
                    replacement: path.resolve(projectRootDir, "src/utility"),
                    customResolver,
                },
                {
                    find: "components",
                    replacement: path.resolve(projectRootDir, "src/components"),
                    customResolver,
                },
                {
                    find: "styles",
                    replacement: path.resolve(projectRootDir, "src/styles"),
                    customResolver,
                },
            ],
        }),
        resolve(),
        commonjs(),
    ],
};
