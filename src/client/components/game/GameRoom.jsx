import React, { Component } from 'react';
import QuestionList from './QuestionList';

class GameRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <QuestionList
          questions={this.props.questions}
        />
      </div>
    );
  }
}

export default GameRoom;