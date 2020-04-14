import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import config from './config.js';
import server from './server.js';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.dev.config.js';

// Configure app and start the server
// Heroku requires the app to listen on a specific port
// Fallback to local config when not running on Heroku
const app = express();
const httpServer = http.Server(app);
const io = socketIO(httpServer);
const port = process.env.PORT || config.port;
const compiler = webpack(webpackConfig);

app.set('port', port);

//Enable "webpack-dev-middleware"
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

httpServer.listen(port, () => console.log('Starting server on port ' + port));

// Run the actual game with access to socket.io
server.initialise(io);