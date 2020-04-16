import React, { Component } from 'react';

class NameEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Welcome to the lobby</h1>
        <form onSubmit={this.handleSubmit} className="pill-text-input">
          <label>
            Name:&nbsp;
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" disabled={!this.state.value} />
        </form>
      </div>
    );
  }
}

export default NameEntry;