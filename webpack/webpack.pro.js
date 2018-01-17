const merge = require('webpack-merge');
const webpack = require('webpack')
const common = require('./webpack.common.js');
const entryFlie = `index.js`
module.exports = merge(common, {
  entry: [`./src/${entryFlie}`],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: {
        drop_debugger: true,
        drop_console: true,
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
});
