import React, { Component } from 'react';
import io from 'socket.io-client';
import messages from '../../common/messages';

import NameEntry from './lobby/NameEntry';
import LobbyRoom from './lobby/LobbyRoom'
import GameRoom from './game/GameRoom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: false,
      game: {
        players: {

        }
      }
    }

    this.socket = io();

    // Save the socket id once connection to the server is complete
    this.socket.on(messages.client.connect,
      () => {
        this.setState({ id: this.socket.id })
        this.socket.emit(messages.player.join);
      }
    );

    // Update local state every time the server sends us new data
    this.socket.on(messages.game.state,
      data => this.setState({ game: data })
    );

    // Log any global messages from the server
    this.socket.on(messages.server.message, function(data) {
      console.log(data);
    });

    //Bind functions
    this.getPlayers = this.getPlayers.bind(this);
    this.setPlayerName = this.setPlayerName.bind(this);
    this.getPlayerName = this.getPlayerName.bind(this);
    this.handleStartButton = this.handleStartButton.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.handleJudgeSelectQuestion = this.handleJudgeSelectQuestion.bind(this);
    this.isInState = this.isInState.bind(this);
  }

  getPlayers () {
    return this.state.game.players || {}
  }

  setPlayerName (value) {
    this.socket.emit(messages.player.setName, value);
  }

  getPlayerName () {
    const id = this.state.id;
    const players = this.getPlayers();
    return id && players && players[id] && players[id].name;
  }

  handleStartButton () {
    this.socket.emit(messages.game.start);
  }

  getQuestions () {
    return this.state.game.questions || {}
  }

  handleJudgeSelectQuestion(value) {
    this.socket.emit(messages.player.setQuestion, value)
  }

  isInState(state) {
    const currentStates = this.state.game.current;
    return currentStates && currentStates.includes(state);
  }

  render() {
    return (
      <div>
        <h1>Say Anything!</h1>
        {!this.getPlayerName() && this.isInState('lobby') && 
          <NameEntry onSubmit={this.setPlayerName} />}
        {this.getPlayerName() && this.isInState('lobby') &&
          <LobbyRoom 
            isHost={this.state.id === this.state.game.hostId}
            players={this.getPlayers()}
            hostId={this.state.game.hostId}
            handleStartButton={this.handleStartButton}
            isReady={this.isInState('lobby.ready')}
          />}
        {this.isInState('game') &&
          <GameRoom
            localId={this.state.id}
            players={this.getPlayers()}
            round={this.state.game.round}
            judgeId={this.state.game.judgeId}
            questions={this.getQuestions()}
            onSelectQuestion={this.handleJudgeSelectQuestion}
          />}
      </div>);
  }
}

export default App;