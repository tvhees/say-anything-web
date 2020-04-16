import React, { Component } from 'react';
import QuestionList from './QuestionList';

class GameRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Round: {this.props.round}</h2>
        <QuestionList
          onSubmit={this.props.onSelectQuestion}
          questions={this.props.questions}
        />
      </div>
    );
  }
}

export default GameRoom;