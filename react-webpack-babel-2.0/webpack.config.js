// Modules
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
