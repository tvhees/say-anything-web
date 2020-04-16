import messages from '../common/messages.js';
import game from './statechart.js'

function initialise (io) {
  var state = {};

  game.start().onChange(context => { state = {...context, current: game.state.toStrings()}; });
  
  io.on(messages.server.clientConnect, function(socket) {
    socket.emit(messages.server.message, "User Connected");

    socket.on(messages.server.clientDisconnect, () =>
      game.send(messages.player.leave, { id: socket.id })
    );

    socket.on(messages.player.setName, data =>
      game.send(messages.player.setName, { id: socket.id, name: data })
    );

    socket.on(messages.game.start, () =>
      game.send(messages.game.start, { id: socket.id })
    );

    socket.on(messages.player.setQuestion, data =>
      game.send(messages.player.setQuestion, { id: socket.id, questionId: data })
    );

    socket.on(messages.player.sertAnswer, data =>
      game.send(messages.player.setAnswer, { id: id, answer: data})
    );
  });

  setInterval(function() {
    io.sockets.emit(messages.game.state, state);
  }, 1000/60);
}

export default {
  initialise
};