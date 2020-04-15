import React, { Component } from 'react';

class QuestionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="question-button"
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default QuestionButton;