const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

const DIST_DIR = 'dist_prod';
const SRC_DIR = 'src';

module.exports = {
    mode: "production",
    entry: path.join(__dirname, SRC_DIR, 'app.js'),
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: path.join(__dirname, DIST_DIR)
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
        new copyPlugin([{
            from: path.join(SRC_DIR, 'polyfills'), to: 'polyfills', ignore: [ '*.map' ]
        }]),

        new htmlPlugin({
            template: path.join(SRC_DIR, 'index.html')
        }),
    ],
}
