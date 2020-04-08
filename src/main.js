import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import config from './config.js';
import gameServer from './server';

// Configure app and start the server
// Heroku requires the app to listen on a specific port
// Fallback to local config when not running on Heroku
const app = express();
const httpServer = http.Server(app);
const io = socketIO(httpServer);
const port = process.env.PORT || config.port;
app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));
app.get('/', (request, response) => response.sendFile(path.join(__dirname, '../index.html')));
httpServer.listen(port, () => console.log('Starting server on port ' + port));

// Run the actual game with access to socket.io
gameServer.initialise(io);