var webpack = require("webpack");
var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")

const config = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client/index.js']
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  mode: 'development',
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};

module.exports = config;
