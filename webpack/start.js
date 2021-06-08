import path from "path";

module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: path.resolve(__dirname, "dist"),

    devServer: {
        port: 8888,
    }
}