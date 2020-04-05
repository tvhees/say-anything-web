// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
});

var players = {};
io.on('connection', function(socket) {
  // Handle new players joining
  socket.on('new player', function() {
    players[socket.id] = {
      name: 'player' + socket.id,
      connected: true,
      answer: null
    };
  });

  //Handle players disconnecting
  socket.on('disconnect', function() {
    players[socket.id].connected = false; 
  });

  socket.on('name', function(data) {
    var player = players[socket.id] || {};
    if (data) {
      player.name = data;
    }
  });

  socket.on('answer', function(data) {
    var player = players[socket.id] || {};
    if (data) {
      player.answer = data;
    }
  });
});

setInterval(function() {
  io.sockets.emit('state', players);
}, 1000/60);