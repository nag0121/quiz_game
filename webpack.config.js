const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
      game : './src/index.ts'
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean : true
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader' },
      ],
    },
    // Add webpack plugins.
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../dist/index.html',
            template: `./src/index.html`,
            hash: true
        }),
        new CopyPlugin({
          patterns: [
            {from: "./src/assets", to: path.resolve(__dirname, 'dist/assets')}
          ]
        })
    ],
    resolve: {
      extensions: ['.ts', '.js'],
    }
};