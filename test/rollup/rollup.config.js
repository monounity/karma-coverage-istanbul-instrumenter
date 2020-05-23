import babel from "@rollup/plugin-babel";

export default {
    input: "index.js",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "calculator",
        sourcemap: true
    },
    plugins: [
        babel({
            presets: [["@babel/preset-env"]],
        })
    ]
};
