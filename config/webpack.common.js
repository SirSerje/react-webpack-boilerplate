const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    'react-hot-loader/patch', // https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
    path.resolve(__dirname, '../src', 'index.js'),
  ],
  output: {
    filename: '[name].[hash].js',
    // where your code will placed relatively project root
    path: path.resolve(__dirname, '../dist'),
    // relates to html-webpack-plugin: where index.html will try to find you code
    // in this repo dist/index.html will looks for js relatively to itself in ./[name][hash].js
    publicPath: '/',
  },
  devServer: {
    // configure package.json build script port or add some env manipulation to
    // pass through process.env you port
    port: process.env.PORT,
    // in 'true' case browser will not change route path. Any 404 like will renders in same route
    historyApiFallback: true,
    // simply shows full screen overlay if there are some compiler error
    overlay: true,
    // open rendered page
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 21000,
              name: 'images/[name]_[hash:7].[ext]',
            },
          },
        ],
      },
      // Vendor CSS loader
      // This is necessary to pack third party libraries like antd
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
