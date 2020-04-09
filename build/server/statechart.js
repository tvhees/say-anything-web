"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xstate = require("xstate");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var countKeys = function countKeys(obj) {
  return Object.keys(obj).length;
};

var isEnoughPlayers = function isEnoughPlayers(_ref) {
  var players = _ref.players;
  return countKeys(players) >= 4;
};

var addPlayer = (0, _xstate.assign)({
  players: function players(_ref2, _ref3) {
    var _players = _ref2.players;
    var id = _ref3.id,
        name = _ref3.name;
    return _objectSpread({}, _players, _defineProperty({}, id, {
      name: name
    }));
  }
});
var lobbyMachineConfig = {
  id: "lobby",
  initial: "count players",
  context: {
    players: {},
    hostId: false,
    judgeId: false
  },
  states: {
    "count players": {
      on: {
        "": [{
          target: "ready",
          cond: isEnoughPlayers
        }, {
          target: "waiting"
        }]
      }
    },
    waiting: {
      on: {
        PLAYER_NAME: {
          target: "count players",
          actions: [addPlayer]
        }
      }
    },
    ready: {
      type: "final"
    }
  }
};
var lobbyMachine = (0, _xstate.Machine)(lobbyMachineConfig);
var game = (0, _xstate.interpret)(lobbyMachine);
var gameMachine = (0, _xstate.Machine)({
  id: "Game",
  context: {
    players: {}
  },
  states: {
    "Pick Question": {
      id: "Pick Question"
    },
    "Write Answer": {
      id: "Write Answer"
    }
  }
});
var _default = game;
exports["default"] = _default;