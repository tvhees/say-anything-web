"use strict";

var messages = {
  io: {
    message: 'message',
    connection: 'connection',
    state: 'state'
  },
  player: {
    join: 'new player',
    leave: 'disconnect',
    setName: 'set name',
    setAnswer: 'set answer'
  }
};
var socket = io();
socket.on(messages.io.message, function (data) {
  console.log(data);
}); // Set up HTML listeners

var nameForm = document.getElementById("name-form");
var answerForm = document.getElementById("answer-form");
nameForm.onsubmit = submitName;
answerForm.onsubmit = submitAnswer;

function submitName(event) {
  var name = event.target.elements[0].value;
  socket.emit(messages.player.setName, name);
  return false; // Prevent refresh
}

function submitAnswer(event) {
  var answer = event.target.elements[0].value;
  socket.emit('answer', answer);
  return false; // Prevent refresh
} // Let lobby know we've joined the page


socket.emit(messages.player.join); // 

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
context.font = '20px sans-serif';
socket.on(messages.io.state, function (game) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayerCards(getNamedPlayers(game.players));
});

function drawPlayerCards(players) {
  var count = Object.keys(players).length;
  var xOffset = 100;
  var yOffset = 100;
  var margin = 20;
  var cardWidth = 100;
  var cardHeight = cardWidth * 2 / 3;

  for (var id in players) {
    var player = players[id];
    context.beginPath();
    context.rect(xOffset + margin, yOffset + margin, cardWidth, cardHeight);
    context.stroke();
    context.fillText(player.name, xOffset + margin, yOffset + margin * 2);
    xOffset += cardWidth + margin;
  }
}

function getNamedPlayers(players) {
  var result = {};

  for (var id in players) {
    if (players[id].name) {
      result[id] = players[id];
    }
  }

  return result;
}

;