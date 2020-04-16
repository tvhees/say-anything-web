import React, { Component } from 'react';
import QuestionButton from './QuestionButton';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {selectedId: ''};
    
    this.handleQuestionClick = this.handleQuestionClick.bind(this);
  }

  handleQuestionClick (id) {
    this.setState({selectedId: id});
    this.props.onSubmit(id);
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
                onClick={() => this.handleQuestionClick(id)}
                disabled={this.state.selectedId}
              />
            )
        }
      </div>
    );
  }
}

export default QuestionList;