import messages from '../common/messages.js';
import game from './statechart.js'

function initialise (io) {
  var state = {};

  game.start().onChange(context => { state = context; });
  
  io.on(messages.io.connection, function(socket) {
    socket.on(messages.player.join, function() {
      
    });

    socket.on(messages.player.leave, function() {
      
    });

    socket.on(messages.player.setName, function(data) {
      game.send('PLAYER_NAME', { id: socket.id, name: data });
    });
  });

  setInterval(function() {
    io.sockets.emit(messages.io.state, state);
  }, 1000/60);
}

export default {
  initialise
};