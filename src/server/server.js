import messages from '../common/messages.js';
import game from './statechart.js'

function initialise (io) {
  var state = {};

  game.start().onChange(context => { state = context; });
  
  io.on(messages.server.clientConnect, function(socket) {
    socket.emit(messages.server.message, "User Connected");

    socket.on(messages.server.clientDisconnect, function() {
      game.send(messages.player.leave, { id: socket.id })
    });

    socket.on(messages.player.setName, function(data) {
      game.send(messages.player.setName, { id: socket.id, name: data });
    });
  });

  setInterval(function() {
    io.sockets.emit(messages.game.state, state);
  }, 1000/60);
}

export default {
  initialise
};