const webpack = require('webpack');
const CustomConcatCopyPlugin = require('./../plugins/CustomConcatCopyPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { imgs  } = require('./../webpack-assets/copyWebPackEntries');
const { _concat1js } = require('./../webpack-assets/concatJsFiles/concatJsFiles');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ErrorToJsonPlugin = require('../plugins/webpack-error2json');
const htmlPlugins =require('../webpack-assets/htmlWebpackPluginEntries');

const env = process.env.NODE_ENV || 'development';

let plugins = [
    // if you need to use jquery in your project //
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': 'jquery',
    }),
    new CleanWebpackPlugin(),
    new RemoveEmptyScriptsPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            imgs
        ]
    }),
    new MiniCssExtractPlugin({
        filename: '[name].min.css',
        chunkFilename: '[id].min.css',
    })
    , new CustomConcatCopyPlugin([ _concat1js])
];

let devPlugins = [
    new ErrorToJsonPlugin(),
    new BundleAnalyzerPlugin(),
    ...htmlPlugins
]

if (env == 'development')
{
    plugins =  plugins.concat(devPlugins) 
}


module.exports = { plugins }