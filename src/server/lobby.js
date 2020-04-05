var preGame = {
  onPlayerJoin: function (socket, game) {
    game.addPlayer(socket.id);
  },
  onPlayerLeave: function (socket, game) {
    game.removePlayer(socket.id);
  },
  onPlayerSetName: function (socket, game, data) {
    game.setPlayerName(socket.id, data);
  },
  onPlayerStartGame: function (socket, game) {
    game.start(socket.id);
  }
};

module.exports = [preGame];