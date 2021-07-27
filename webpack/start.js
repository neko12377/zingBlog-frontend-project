const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(path.resolve("."), "dist"),
        filename: "[name].[contenthash].js",
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        modules: [
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../node_modules"),
        ],
    },

    module: {
        rules: [{
            test: /(.tsx?$)/,
            loader: "ts-loader",
            exclude: /(node_modules)/
        }],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html",
    })],

    devServer: {
        port: 8888,
    }
}