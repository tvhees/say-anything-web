"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messages = _interopRequireDefault(require("../common/messages.js"));

var _statechart = _interopRequireDefault(require("./statechart.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initialise(io) {
  var state = {};

  _statechart["default"].start().onChange(function (context) {
    state = context;
  });

  io.on(_messages["default"].io.connection, function (socket) {
    socket.on(_messages["default"].player.join, function () {});
    socket.on(_messages["default"].player.leave, function () {});
    socket.on(_messages["default"].player.setName, function (data) {
      _statechart["default"].send('PLAYER_NAME', {
        id: socket.id,
        name: data
      });
    });
  });
  setInterval(function () {
    io.sockets.emit(_messages["default"].io.state, state);
  }, 1000 / 60);
}

var _default = {
  initialise: initialise
};
exports["default"] = _default;