var webpack = require("webpack");
var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")

var BUILD_DIR = path.resolve(__dirname, "./build");
var SOURCE_DIR = path.resolve(__dirname, "./src/client");

const config = {
  entry: {
    main: [SOURCE_DIR + "/index.js"]
  },
  output: {
    filename: "[name].js",
    path: BUILD_DIR,
    publicPath: '/'
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ],
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/html/index.html",
      filename: "./index.html"
    })
  ],
};

module.exports = config;
