"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js"
    },
    watch: NODE_ENV == "development",
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" },
          ]
    }
}