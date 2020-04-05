// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var gameServer = require('./src/server/index.js');

var app = express();
var httpServer = http.Server(app);
var io = socketIO(httpServer);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/src/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
httpServer.listen(5000, function() {
  console.log('Starting server on port 5000');
});

gameServer.initialise(io);