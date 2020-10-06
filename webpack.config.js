var path = require('path');

module.exports = {

    optimization: {
        splitChunks: {

        }
    },

    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },

    devServer: {
        contentBase: 'public'
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