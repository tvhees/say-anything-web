import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import config from '../config.js';
import useDevServer from './dev-server.js';
import server from './server.js';

// Configure app and start the server
// Heroku requires the app to listen on a specific port
// Fallback to local config when not running on Heroku
const app = express();
const httpServer = http.Server(app);
const io = socketIO(httpServer);
const port = process.env.PORT || config.port;
app.set('port', port);


const devServerEnabled = true;
if (devServerEnabled) {
  useDevServer(app);
}

app.use(express.static(__dirname + './../../public'));
app.use(express.static(__dirname + './../../build'));
httpServer.listen(port, () => console.log('Starting server on port ' + port));

// Run the actual game with access to socket.io
server.initialise(io);