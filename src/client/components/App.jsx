import React, { Component } from 'react';
import NameEntry from './NameEntry.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Say Anything</h1>
        <NameEntry />
      </div>);
  }
}

export default App;