const debugMode = (process.env.debug === undefined) ? false : true;
console.log('debugMode', debugMode);
const paths = require('./paths');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const scriptEntries = require('./webpack-assets/scriptEntries');
const { styleEntries } = require('./webpack-assets/styleEntries');



const ScssEntries = styleEntries;

function nodeVersionChecker() {
    const nodeVersionLive = '20.14.0'; // suggested node version
    const nodeVersionLocal = (process.version !== undefined) ? process.version.replace('v', '') : false;

    if (nodeVersionLive == nodeVersionLocal) {
        console.log('\u001b[' + 32 + 'm' + 'Info: Local node version is equal to Live node version. Local node v ' + nodeVersionLocal + ' - Live node v ' + nodeVersionLive + ' -Success ' + '\u001b[0m');
    } else {
        console.log('\u001b[' + 31 + 'm' + 'Warning: Local node version is not equal to Live node version. Local node v ' + nodeVersionLocal + ' - Live node v ' + nodeVersionLive + ' . You may experience some problems.' + '\u001b[0m');
    }
}
nodeVersionChecker();

const entries = {
    ...scriptEntries,
    ...ScssEntries
};
if (debugMode) {
    console.log('entries', entries);
    console.log('ScssEntries', ScssEntries);
}

module.exports = {
    entry: entries,
    output: {
        path: paths.build,
        filename: '[name].js',
        publicPath: '/',
        clean: true
    },
    stats: {
        all: true,
        errors: true,
        warnings: true,
        errorDetails: true, // Show details about errors
        //preset: 'minimal',
        moduleTrace: true,
    },
    watchOptions: {
        ignored: /node_modules/,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        sources: false,
                    },
                },
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            modules: false,
                            url: false
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    /* {
                        loader: 'string-replace-loader',
                        options: {
                            search: 'placaholder',
                            replace: 'replace-string',
                            flags: 'g'
                        }
                    },
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '\\$statik',
                            replace: 'replace-string',
                            flags: 'g'
                        }
                    }
                    */
                ],
            },
            // Images: Copy image files to build folder
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
            // Fonts and SVGs: Inline files
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
        ]
    },
    resolve: {
        preferRelative: true,
        modules: [paths.src, 'node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@pathsSrc': paths.src,
            '@images/': paths.images,
            assets: paths.build,
            //jquery: paths.src + '/scripts/jquery.js',
        }
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    }
};
