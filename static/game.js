var socket = io();
socket.on('message', function(data) {
  console.log(data);
});

document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 13: // Enter
      socket.emit('submit answer', 'Test Answer');
      break;
  }
});

socket.emit('new player');

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
context.font = '50px sans-serif';

socket.on('state', function (players) {
  context.clearRect(0, 0, 800, 600);
  for (var id in players) {
    var player = players[id];
    context.fillText(player.name, 100, 100);
    context.fillText(player.answer, 100, 200);
  }
});