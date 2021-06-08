const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(path.resolve("."), "src/index.tsx"),
    output: {
        path: path.resolve(path.resolve("."), "dist"),
        filename: "index.js",
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /^node_modules$/,
            },
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    optimization: {
    },
}