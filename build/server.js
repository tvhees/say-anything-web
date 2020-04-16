/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/messages.js":
/*!********************************!*\
  !*** ./src/common/messages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server: {\n    message: 'message',\n    clientConnect: 'connect',\n    clientDisconnect: 'disconnect'\n  },\n  client: {\n    connect: 'connect',\n    disconnect: 'disconnect'\n  },\n  game: {\n    state: 'GAME_STATE',\n    start: 'GAME_START'\n  },\n  player: {\n    join: 'PLAYER_JOIN',\n    leave: 'PLAYER_LEAVE',\n    setName: 'PLAYER_NAME',\n    setQuestion: 'PLAYER_QUESTION',\n    setAnswer: 'PLAYER_ANSWER'\n  }\n});\n\n//# sourceURL=webpack:///./src/common/messages.js?");

/***/ }),

/***/ "./src/common/rules.js":
/*!*****************************!*\
  !*** ./src/common/rules.js ***!
  \*****************************/
/*! exports provided: minPlayers, maxPlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minPlayers\", function() { return minPlayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxPlayers\", function() { return maxPlayers; });\nvar minPlayers = 1;\nvar maxPlayers = 8;\n\n//# sourceURL=webpack:///./src/common/rules.js?");

/***/ }),

/***/ "./src/common/utilities.js":
/*!*********************************!*\
  !*** ./src/common/utilities.js ***!
  \*********************************/
/*! exports provided: countKeys, removeKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countKeys\", function() { return countKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeKey\", function() { return removeKey; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar countKeys = function countKeys(obj) {\n  return Object.keys(obj).length;\n};\nvar removeKey = function removeKey(obj, key) {\n  var _ = obj[key],\n      newObj = _objectWithoutProperties(obj, [key].map(_toPropertyKey));\n\n  return newObj;\n};\n\n//# sourceURL=webpack:///./src/common/utilities.js?");

/***/ }),

/***/ "./src/server/actions.js":
/*!*******************************!*\
  !*** ./src/server/actions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utilities */ \"./src/common/utilities.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar setHostId = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  hostId: function hostId(_ref, _ref2) {\n    var players = _ref.players,\n        _hostId = _ref.hostId;\n    var id = _ref2.id;\n    return Object(_common_utilities__WEBPACK_IMPORTED_MODULE_1__[\"countKeys\"])(players) ? _hostId : id;\n  }\n});\nvar addPlayer = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  players: function players(_ref3, _ref4) {\n    var _players = _ref3.players;\n    var id = _ref4.id,\n        name = _ref4.name;\n    return _objectSpread({}, _players, _defineProperty({}, id, {\n      name: name\n    }));\n  }\n});\nvar removePlayer = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  players: function players(_ref5, _ref6) {\n    var _players2 = _ref5.players;\n    var id = _ref6.id;\n    return Object(_common_utilities__WEBPACK_IMPORTED_MODULE_1__[\"removeKey\"])(_players2, id);\n  }\n});\n\nvar setLobbyIsReady = function setLobbyIsReady(value) {\n  return Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n    isReady: value\n  });\n};\n\nvar setInitialGameState = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  round: 0,\n  judgeId: false,\n  questions: {},\n  question: false,\n  answers: {}\n});\nvar incrementRound = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  round: function round(_ref7) {\n    var _round = _ref7.round;\n    return _round + 1;\n  }\n});\nvar setNextJudge = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  judgeId: function judgeId(_ref8) {\n    var players = _ref8.players;\n    return Object.keys(players)[0];\n  }\n});\nvar setNextQuestionSelection = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  questions: {\n    c1q1: 'What\\'s the best video game of all time?',\n    c1q2: 'What\\'s the best excuse for forgetting your anniversary?',\n    c1q3: 'What would be the coolest name for a band?',\n    c1q4: 'What would be the worst thing to scream during church?',\n    c1q5: 'There\\'s no crying in ________!'\n  }\n});\nvar setNextQuestion = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  question: function question(_ref9, _ref10) {\n    var questions = _ref9.questions;\n    var questionId = _ref10.questionId;\n    return questions[questionId];\n  }\n});\nvar setPlayerAnswer = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  answers: function answers(_ref11, _ref12) {\n    var _answers = _ref11.answers;\n    var id = _ref12.id,\n        answer = _ref12.answer;\n    return _objectSpread({}, _answers, _defineProperty({}, id, answer));\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setHostId: setHostId,\n  addPlayer: addPlayer,\n  removePlayer: removePlayer,\n  setLobbyIsReady: setLobbyIsReady,\n  setInitialGameState: setInitialGameState,\n  incrementRound: incrementRound,\n  setNextJudge: setNextJudge,\n  setNextQuestionSelection: setNextQuestionSelection,\n  setNextQuestion: setNextQuestion,\n  setPlayerAnswer: setPlayerAnswer\n});\n\n//# sourceURL=webpack:///./src/server/actions.js?");

/***/ }),

/***/ "./src/server/config.js":
/*!******************************!*\
  !*** ./src/server/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  port: 8080\n});\n\n//# sourceURL=webpack:///./src/server/config.js?");

/***/ }),

/***/ "./src/server/index-dev.js":
/*!*********************************!*\
  !*** ./src/server/index-dev.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ \"./src/server/config.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server.js */ \"./src/server/server.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n // Configure app and start the server\n// Heroku requires the app to listen on a specific port\n// Fallback to local config when not running on Heroku\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar httpServer = http__WEBPACK_IMPORTED_MODULE_1___default.a.Server(app);\nvar io = socket_io__WEBPACK_IMPORTED_MODULE_3___default()(httpServer);\nvar port = process.env.PORT || _config_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].port;\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_6___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_9___default.a);\napp.set('port', port); //Enable \"webpack-dev-middleware\"\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_7___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_9___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_8___default()(compiler));\nhttpServer.listen(port, function () {\n  return console.log('Starting server on port ' + port);\n}); // Run the actual game with access to socket.io\n\n_server_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].initialise(io);\n\n//# sourceURL=webpack:///./src/server/index-dev.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/messages.js */ \"./src/common/messages.js\");\n/* harmony import */ var _statechart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statechart.js */ \"./src/server/statechart.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction initialise(io) {\n  var state = {};\n  _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start().onChange(function (context) {\n    state = _objectSpread({}, context, {\n      current: _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].state.toStrings()\n    });\n  });\n  io.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.clientConnect, function (socket) {\n    socket.emit(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.message, \"User Connected\");\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.clientDisconnect, function () {\n      return _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.leave, {\n        id: socket.id\n      });\n    });\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setName, function (data) {\n      return _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setName, {\n        id: socket.id,\n        name: data\n      });\n    });\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game.start, function () {\n      return _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game.start, {\n        id: socket.id\n      });\n    });\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setQuestion, function (data) {\n      return _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setQuestion, {\n        id: socket.id,\n        questionId: data\n      });\n    });\n  });\n  setInterval(function () {\n    io.sockets.emit(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game.state, state);\n  }, 1000 / 60);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  initialise: initialise\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/statechart.js":
/*!**********************************!*\
  !*** ./src/server/statechart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utilities */ \"./src/common/utilities.js\");\n/* harmony import */ var _common_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/rules */ \"./src/common/rules.js\");\n/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/messages */ \"./src/common/messages.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ \"./src/server/actions.js\");\nvar _on;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar isEnoughPlayers = function isEnoughPlayers(_ref) {\n  var players = _ref.players;\n  return Object(_common_utilities__WEBPACK_IMPORTED_MODULE_1__[\"countKeys\"])(players) >= _common_rules__WEBPACK_IMPORTED_MODULE_2__[\"minPlayers\"];\n};\n\nvar lobbyStates = {\n  initial: \"waiting\",\n  on: (_on = {}, _defineProperty(_on, _common_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].player.setName, {\n    target: \".count players\",\n    actions: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setHostId, _actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addPlayer]\n  }), _defineProperty(_on, _common_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].player.leave, {\n    target: \".count players\",\n    actions: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removePlayer]\n  }), _on),\n  states: {\n    \"count players\": {\n      on: {\n        \"\": [{\n          target: 'ready',\n          cond: isEnoughPlayers\n        }, {\n          target: 'waiting'\n        }]\n      }\n    },\n    waiting: {\n      entry: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setLobbyIsReady(false)]\n    },\n    ready: {\n      entry: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setLobbyIsReady(true)],\n      on: _defineProperty({}, _common_messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].game.start, 'closed')\n    },\n    closed: {\n      type: 'final'\n    }\n  }\n};\n\nvar isEnoughAnswers = function isEnoughAnswers(_ref2) {\n  var players = _ref2.players,\n      answers = _ref2.answers;\n  return Object(_common_utilities__WEBPACK_IMPORTED_MODULE_1__[\"countKeys\"])(players) === Object(_common_utilities__WEBPACK_IMPORTED_MODULE_1__[\"countKeys\"])(answers) + 1;\n};\n\nvar gameStates = {\n  initial: 'judge pick question',\n  states: {\n    \"judge pick question\": {\n      entry: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].incrementRound, _actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setNextJudge, _actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setNextQuestionSelection],\n      on: {\n        PLAYER_QUESTION: {\n          target: \"write answers\",\n          actions: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setNextQuestion]\n        }\n      }\n    },\n    \"write answers\": {\n      initial: 'waiting',\n      states: {\n        waiting: {\n          on: {\n            PLAYER_ANSWER: {\n              target: \"count answers\",\n              actions: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setPlayerAnswer]\n            }\n          }\n        },\n        \"count answers\": {\n          on: {\n            \"\": [{\n              target: \"#judge-answer\",\n              cond: isEnoughAnswers\n            }, {\n              target: \"waiting\"\n            }]\n          }\n        }\n      }\n    },\n    \"judge choose answer\": {\n      id: 'judge-answer'\n    }\n  }\n};\nvar appMachineConfig = {\n  initial: 'lobby',\n  context: {\n    players: {},\n    hostId: false\n  },\n  states: {\n    lobby: _objectSpread({\n      onDone: 'game'\n    }, lobbyStates),\n    game: _objectSpread({\n      entry: [_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setInitialGameState]\n    }, gameStates)\n  }\n};\nvar appMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"])(appMachineConfig);\nvar game = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"interpret\"])(appMachine);\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n//# sourceURL=webpack:///./src/server/statechart.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar config = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client/index.js']\n  },\n  output: {\n    filename: \"[name].js\",\n    path: path.join(__dirname, 'build'),\n    publicPath: '/'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  resolve: {\n    extensions: ['.js', '.jsx']\n  },\n  module: {\n    rules: [{\n      test: /(\\.css|.scss)$/,\n      use: [{\n        loader: \"style-loader\" // creates style nodes from JS strings\n\n      }, {\n        loader: \"css-loader\" // translates CSS into CommonJS\n\n      }, {\n        loader: \"sass-loader\" // compiles Sass to CSS\n\n      }]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }, {\n      test: /\\.(jsx|js)?$/,\n      exclude: /node_modules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\"\n      }]\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/client/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "xstate":
/*!*************************!*\
  !*** external "xstate" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xstate\");\n\n//# sourceURL=webpack:///external_%22xstate%22?");

/***/ })

/******/ });