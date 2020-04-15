import React, { Component } from 'react';
import io from 'socket.io-client';
import messages from '../../common/messages.js';

import NameEntry from './lobby/NameEntry.jsx';
import PlayerList from './lobby/PlayerList';

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

  render() {
    return (
      <div>
        <h1>Say Anything!</h1>
        {!this.getPlayerName()
          ? <NameEntry onSubmit={this.setPlayerName} />
          : <PlayerList
              players={this.getPlayers()}
              hostId={this.state.game.hostId} 
            />}
      </div>);
  }
}

export default App;