const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
                {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
                },
            
                {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                },
                {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'url-loader?name=src/client/media/[name].[ext]'
                }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    })
    ]
}