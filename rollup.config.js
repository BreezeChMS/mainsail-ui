import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";
import { visualizer } from "rollup-plugin-visualizer";

import pkg from "./package.json";

const path = require("path");
const customResolver = resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});
const projectRootDir = path.resolve(__dirname);
const warningSuppressionFilter = /imported from external module 'react'/;

export default {
    input: "src/index.js",
    output: [
        {
            name: "mainsail-ui",
            sourcemap: true,
            file: pkg.main,
            format: "cjs",
        },
        /**
         * Note: This is a future facing output
         * May not be necessary at the moment
         */
        {
            sourcemap: true,
            file: pkg.module,
            format: "es",
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
        process.env.NODE_ENV !== "production" &&
            visualizer({
                filename: "bundle-viz.html",
                open: false,
                projectRoot: "/src",
            }),
    ],
    /*
     *
     *  This specific warning suppression pattern exists because
     *  some 3rd-party deps import unused modules.
     *
     *  Rollup is smart enough to not include them, but
     *  the warning provided will fail the build since we
     *  run with a strict --failAfterWarnings
     *
     *  If future dependencies provide more issues, we can re-evaluate
     */
    onwarn: function (message) {
        const str = message.toString();
        if (warningSuppressionFilter.test(str)) {
            return;
        }
        console.error(message);
    },
};
