const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const paths = require('./paths')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
const { devServer } = require('./config/devServer')
const { plugins } = require('./config/plugin')


const env = process.env.NODE_ENV || 'development';
const devtool = env === 'development' ? "inline-source-map" : false;
console.log("NODE_ENV", env);
module.exports = merge(common, {
  cache: {
    type: 'filesystem', // Dosya sistemi tabanl� cache kullan�m�
    buildDependencies: {
      config: [__filename], // Config dosyas� de�i�ti�inde cache'i temizler
    },
  },
  mode: env,
  devtool: devtool,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: '[name].js',
    clean: true,
  },
  devServer: devServer,
  plugins: plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin({
      exclude: [/\/node_modules\//,
        'example_folder/'],
      parallel: true,
      extractComments: false,
      terserOptions: {
        nameCache: {},
        safari10: true,
        ie8: true,
        sourceMap: true,
        compress: {
          drop_console: true,
        },
      },
    })],

  }
})
