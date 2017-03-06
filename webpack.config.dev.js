var path = require('path');
var webpack = require('webpack');

var publicPath = '/'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    path.join(__dirname, '/public/index.js'),
  ],
  output: {
    path: publicPath,
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
