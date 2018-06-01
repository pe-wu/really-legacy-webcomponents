const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

const DIST_DIR = 'dist_dev';
const SRC_DIR = 'src';

module.exports = {
    mode: "development",
    entry: path.join(__dirname, SRC_DIR, 'app.js'),
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: path.join(__dirname, DIST_DIR)
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, SRC_DIR),
        compress: true,
        open: true,
        port: 9000,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    plugins: [
        new cleanPlugin(path.join(DIST_DIR, '*')),

        new copyPlugin([{
            from: path.join(SRC_DIR, 'polyfills'), to: 'polyfills'
        }]),


        new htmlPlugin({
            template: path.join(SRC_DIR, 'index.html')
        }),
    ],
}
