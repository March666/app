const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const templateHtml = `index.ejs`
const webpack = require('webpack')
module.exports = {
  entry: {
    app: 'index.js'
  },
  output: {
    filename: 'smt.[name].[hash].js',
    publicPath: '/smt',
    path: path.resolve(__dirname, '../dist/smt')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract(['css-loader','less-loader'])
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '[name].[hash:5].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              mozjpeg: {
                progressive: true
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['smt'],{
      root:     path.resolve(__dirname, '../dist'),
      verbose:  true,
      dry:      false
    }),
    new ExtractTextPlugin('styles.[hash].css'),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(__dirname, `../src/${templateHtml}`),
      title: '市民通',
      inject: false,
      favicon: `./logo.png`,
      compile: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     // 任何在 mode_modules引入的模块都单独打包
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // })
  ]
}
