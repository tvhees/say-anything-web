"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _socket = _interopRequireDefault(require("socket.io"));

var _config = _interopRequireDefault(require("./config.js"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Configure app and start the server
// Heroku requires the app to listen on a specific port
// Fallback to local config when not running on Heroku
var app = (0, _express["default"])();

var httpServer = _http["default"].Server(app);

var io = (0, _socket["default"])(httpServer);
var port = process.env.PORT || _config["default"].port;
app.set('port', port);
app.use('/static', _express["default"]["static"](__dirname + '/static'));
app.get('/', function (request, response) {
  return response.sendFile(_path["default"].join(__dirname, '../index.html'));
});
httpServer.listen(port, function () {
  return console.log('Starting server on port ' + port);
}); // Run the actual game with access to socket.io

_server["default"].initialise(io);