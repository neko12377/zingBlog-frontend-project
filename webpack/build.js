const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(path.resolve("."), "src/index.tsx"),
    output: {
        path: path.resolve(path.resolve("."), "dist"),
        filename: "[name].[contenthash].js",
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

    plugins: [
        new CleanWebpackPlugin(),
    ],

    optimization: {},
}