const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    // where your code will placed relatively project root
    path: path.resolve(__dirname, '../dist'),
    // relates to html-webpack-plugin: where index.html will try to find you code
    // in this repo dist/index.html will looks for js relatively to itself in ./[name][hash].js
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: false,
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
    }),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
      openAnalyzer: true,
    }),
  ],
});