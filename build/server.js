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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  server: {\n    message: 'message',\n    clientConnect: 'connect',\n    clientDisconnect: 'disconnect'\n  },\n  client: {\n    connect: 'connect',\n    disconnect: 'disconnect'\n  },\n  game: {\n    state: 'GAME_STATE'\n  },\n  player: {\n    join: 'PLAYER_JOIN',\n    leave: 'PLAYER_LEAVE',\n    setName: 'PLAYER_NAME',\n    setAnswer: 'PLAYER_ANSWER'\n  }\n});\n\n//# sourceURL=webpack:///./src/common/messages.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/messages.js */ \"./src/common/messages.js\");\n/* harmony import */ var _statechart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statechart.js */ \"./src/server/statechart.js\");\n\n\n\nfunction initialise(io) {\n  var state = {};\n  _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start().onChange(function (context) {\n    state = context;\n  });\n  io.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.clientConnect, function (socket) {\n    socket.emit(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.message, \"User Connected\");\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server.clientDisconnect, function () {\n      _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.leave, {\n        id: socket.id\n      });\n    });\n    socket.on(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setName, function (data) {\n      _statechart_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player.setName, {\n        id: socket.id,\n        name: data\n      });\n    });\n  });\n  setInterval(function () {\n    io.sockets.emit(_common_messages_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].game.state, state);\n  }, 1000 / 60);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  initialise: initialise\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/statechart.js":
/*!**********************************!*\
  !*** ./src/server/statechart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"xstate\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xstate__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar countKeys = function countKeys(obj) {\n  return Object.keys(obj).length;\n};\n\nvar isEnoughPlayers = function isEnoughPlayers(_ref) {\n  var players = _ref.players;\n  return countKeys(players) >= 4;\n};\n\nvar addPlayer = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"assign\"])({\n  players: function players(_ref2, _ref3) {\n    var _players = _ref2.players;\n    var id = _ref3.id,\n        name = _ref3.name;\n    return _objectSpread({}, _players, _defineProperty({}, id, {\n      name: name\n    }));\n  }\n});\nvar lobbyMachineConfig = {\n  id: \"lobby\",\n  initial: \"count players\",\n  context: {\n    players: {},\n    hostId: false,\n    judgeId: false\n  },\n  states: {\n    \"count players\": {\n      on: {\n        \"\": [{\n          target: \"ready\",\n          cond: isEnoughPlayers\n        }, {\n          target: \"waiting\"\n        }]\n      }\n    },\n    waiting: {\n      on: {\n        PLAYER_NAME: {\n          target: \"count players\",\n          actions: [addPlayer]\n        }\n      }\n    },\n    ready: {\n      type: \"final\"\n    }\n  }\n};\nvar lobbyMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"])(lobbyMachineConfig);\nvar game = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"interpret\"])(lobbyMachine);\nvar gameMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"])({\n  id: \"Game\",\n  context: {\n    players: {}\n  },\n  states: {\n    \"Pick Question\": {\n      id: \"Pick Question\"\n    },\n    \"Write Answer\": {\n      id: \"Write Answer\"\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (game);\n\n//# sourceURL=webpack:///./src/server/statechart.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar config = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/client/index.js']\n  },\n  output: {\n    filename: \"[name].js\",\n    path: path.join(__dirname, 'build'),\n    publicPath: '/'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: 'source-map',\n  module: {\n    rules: [{\n      test: /(\\.css|.scss)$/,\n      use: [{\n        loader: \"style-loader\" // creates style nodes from JS strings\n\n      }, {\n        loader: \"css-loader\" // translates CSS into CommonJS\n\n      }, {\n        loader: \"sass-loader\" // compiles Sass to CSS\n\n      }]\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }, {\n      test: /\\.(jsx|js)?$/,\n      exclude: /node_modules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\"\n      }]\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/client/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

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