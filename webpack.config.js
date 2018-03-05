const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// module.exports = {
//   entry:{ 
//     app: './src/index.js'
//     // print: './src/print.js'
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   },
//   plugins: [
//        new UglifyJSPlugin()
//      ],
//   plugins: [
//        new CleanWebpackPlugin(['dist']),
//        new HtmlWebpackPlugin({
//         title: 'Hot Module Replacement'
//        }),
//        new webpack.NamedModulesPlugin(),
//        new webpack.HotModuleReplacementPlugin()
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/'
//   }
//  };

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
             name: 'common' // Specify the common bundle's name.
           })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};