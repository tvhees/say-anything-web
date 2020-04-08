"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var preGame = {
  onPlayerJoin: function onPlayerJoin(socket, game) {
    game.addPlayer(socket.id);
  },
  onPlayerLeave: function onPlayerLeave(socket, game) {
    game.removePlayer(socket.id);
  },
  onPlayerSetName: function onPlayerSetName(socket, game, data) {
    game.setPlayerName(socket.id, data);
  },
  onPlayerStartGame: function onPlayerStartGame(socket, game) {
    game.start(socket.id);
  }
};
var _default = [preGame];
exports["default"] = _default;