import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="start-button"
        onClick={this.props.onClick}
        disabled={!(this.props.isReady && this.props.isHost)}
      >
        {this.props.isReady
          ? this.props.isHost
            ? 'Start Game'
            : 'Waiting for host'
          : 'Waiting for players'
        }
      </button>
    );
  }
}

export default StartButton;