import React, { Component } from 'react';

class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player-card">
        <p>{`${this.props.name}${this.props.isHost ? ' (Host)' : ''}`}</p>
      </div>
    );
  }
}

export default PlayerCard;