// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var config = require('./config.js');
var gameServer = require('./src/server/index.js');

var app = express();
var httpServer = http.Server(app);
var io = socketIO(httpServer);

var port = process.env.PORT || config.port;

app.set('port', port);
app.use('/static', express.static(__dirname + '/src/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
httpServer.listen(port, function() {
  console.log('Starting server on port ' + port);
});

gameServer.initialise(io);