module.exports = {
    entry: ["./utils", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,
    mode: "development",
    module: {
        rules: [
            // { test: /\.js$/, use: "jshint-loader" }
        ]
    },
    resolve: {
        extensions: [".js", ".es6"]
    }
}