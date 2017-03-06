var path = require('path');
var webpack = require('webpack');

var publicPath = '/'

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, '/public/index.js'),
  ],
  output: {
    path: './dist/public',
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
            presets:['react'],
          },
        },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
  }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ]
}
