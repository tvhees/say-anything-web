import React, { Component } from 'react';
import NameEntry from './NameEntry.jsx';
import io from 'socket.io-client';
import messages from '../../common/messages.js';

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
    this.setPlayerName = this.setPlayerName.bind(this);
    this.isPlayerNameSet = this.isPlayerNameSet.bind(this);
  }

  setPlayerName (value) {
    this.socket.emit(messages.player.setName, value);
  }

  isPlayerNameSet () {
    const id = this.state.id;
    const players = this.state.game.players;
    return id && players && players[id] && players[id].name;
  }

  render() {
    return (
      <div>
        <h1>Say Anything!</h1>
        {!this.isPlayerNameSet() && <NameEntry onSubmit={this.setPlayerName} />}
      </div>);
  }
}

export default App;