var socket = io();
socket.on('message', function(data) {
  console.log(data);
});

const nameForm = document.getElementById("name-form");
const answerForm = document.getElementById("answer-form");

nameForm.onsubmit = submitName;
answerForm.onsubmit = submitAnswer;

function submitName(event) {
  var name = event.target.elements[0].value;
  socket.emit('name', name);
  return false; // Prevent refresh
}

function submitAnswer(event) {
  var answer = event.target.elements[0].value;
  socket.emit('answer', answer);
  return false; // Prevent refresh
}

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
    if (player.connected) {
      context.fillText(player.name, 100, 100);
      context.fillText(player.answer, 100, 200);
    }
  }
});