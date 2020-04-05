var messages = require('../common/messages.js');
var Game = require('./game.js');
var lobby = require('./lobby.js');



function initialise (io) {
  var game = new Game();

  var state = lobby[0];
  
  io.on(messages.io.connection, function(socket) {
    socket.on(messages.player.join, function() {
      state.onPlayerJoin(socket, game);
    });

    socket.on(messages.player.leave, function() {
      state.onPlayerLeave(socket, game);
    });

    socket.on(messages.player.setName, function(data) {
      state.onPlayerSetName(socket, game, data)
    });
  });

  setInterval(function() {
    io.sockets.emit(messages.io.state, game);
  }, 1000/60);
}

module.exports = {
  initialise: initialise
};