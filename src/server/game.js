function Game () {
  this.players = {};
  this.hostId = null;
  this.isStarted = false;
  this.judgeId = null,
  this.question = [];
  this.answers = [];

  this.addPlayer = function (id) {
    if (Object.keys(this.players).length <= 0) {
      this.hostId = id;
    }

    this.players[id] = {};
  }

  this.removePlayer = function (id) {
    if (this.players[id]) {
      delete this.players[id];
    }
  };

  this.setPlayerName = function (id, data) {
    if (this.players[id]) {
      this.players[id].name = data;
    }
  };

  this.start = function (id) {
    if (id === this.hostId) {
      this.isStarted = true;
    }
  };

  this.getPlayerName = function (id) {
    if (this.players[id]) {
      return this.players[id].name;
    }

    return null;
  };    
}

module.exports = Game;