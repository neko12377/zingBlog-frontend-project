const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(path.resolve("."), "src/index.tsx"),
    output: {
        path: path.resolve(path.resolve("."), "dist"),
        filename: "[name].[contenthash].js",
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: [
            path.resolve(__dirname, "../node_modules"),
            path.resolve(__dirname, "../src")
        ]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /(node_modules)/,
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        })
    ],

    optimization: {},
}