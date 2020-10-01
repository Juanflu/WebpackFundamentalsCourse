var WebpackStrip = require("strip-loader");
var devConfig = require("./webpack.config.js");
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    loader: WebpackStrip.loader("console.log", "perfLog")
}

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;