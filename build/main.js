"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _socket = _interopRequireDefault(require("socket.io"));

var _config = _interopRequireDefault(require("./config.js"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Dependencies
var app = (0, _express["default"])();

var httpServer = _http["default"].Server(app);

var io = (0, _socket["default"])(httpServer);
var port = process.env.PORT || _config["default"].port;
app.set('port', port);
app.use('/static', _express["default"]["static"](__dirname + '/static')); // Routing

app.get('/', function (request, response) {
  response.sendFile(_path["default"].join(__dirname, '../index.html'));
}); // Starts the server.

httpServer.listen(port, function () {
  console.log('Starting server on port ' + port);
});

_server["default"].initialise(io);