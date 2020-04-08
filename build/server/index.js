"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messages = _interopRequireDefault(require("../common/messages.js"));

var _game = _interopRequireDefault(require("./game.js"));

var _lobby = _interopRequireDefault(require("./lobby.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initialise(io) {
  var game = new _game["default"]();
  var state = _lobby["default"][0];
  io.on(_messages["default"].io.connection, function (socket) {
    socket.on(_messages["default"].player.join, function () {
      state.onPlayerJoin(socket, game);
    });
    socket.on(_messages["default"].player.leave, function () {
      state.onPlayerLeave(socket, game);
    });
    socket.on(_messages["default"].player.setName, function (data) {
      state.onPlayerSetName(socket, game, data);
    });
  });
  setInterval(function () {
    io.sockets.emit(_messages["default"].io.state, game);
  }, 1000 / 60);
}

var _default = {
  initialise: initialise
};
exports["default"] = _default;