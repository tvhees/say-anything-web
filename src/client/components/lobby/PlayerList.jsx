import React, { Component } from 'react';
import PlayerCard from '../player/PlayerCard';

class PlayerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-list">
        {
          Object.entries(this.props.players)
            .map(([id, player]) =>
              <PlayerCard
                key={id}
                name={player.name}
                isHost={id === this.props.hostId} 
              />
            )
        }
      </div>
    );
  }
}

export default PlayerList;