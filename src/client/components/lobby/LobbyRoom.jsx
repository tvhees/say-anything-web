import React, { Component } from 'react';
import PlayerList from './PlayerList';
import StartButton from './StartButton';

class LobbyRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PlayerList
          players={this.props.players}
          hostId={this.props.hostId} 
        />
        <StartButton
          isHost={this.props.isHost}
          isReady={this.props.isReady}
          onClick={this.props.handleStartButton}
        />
      </div>
    );
  }
}

export default LobbyRoom;