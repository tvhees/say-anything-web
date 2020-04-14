var webpack = require("webpack");
const nodeExternals = require('webpack-node-externals')
var path = require("path");

module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    './src/server/index-prod.js' :
    './src/server/index-dev.js'

  var BUILD_DIR = path.join(__dirname, "build");

  return ({
    entry: {
      server: SERVER_PATH
    },
    output: {
      filename: "[name].js",
      path: BUILD_DIR,
      publicPath: '/'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    resolve: {
      alias: {}
    },
    plugins: [],
  })

}