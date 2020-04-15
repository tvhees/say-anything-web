import React, { Component } from 'react';
import QuestionButton from './QuestionButton';

class QuestionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="question-list">
        {
          Object.entries(this.props.questions)
            .map(([id, text]) =>
              <QuestionButton
                key={id}
                text={text}
              />
            )
        }
      </div>
    );
  }
}

export default QuestionList;