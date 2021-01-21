import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default {
    input: "src/index.js",
    output: [
        {
            name: "mainsail-ui",
            sourcemap: true,
            file: pkg.main,
            format: "umd",
            globals: {
                clsx: "clsx",
            },
        },
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            // modules: true,
            use: ["sass"],
        }),
        babel({ exclude: "node_modules/**" }),
        resolve(),
        commonjs(),
    ],
};
