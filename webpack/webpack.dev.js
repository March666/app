const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const entryFlie = `index.js`
module.exports = merge(common, {
  entry: ['webpack/hot/dev-server','webpack-hot-middleware/client?reload=true',`./src/${entryFlie}`],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
