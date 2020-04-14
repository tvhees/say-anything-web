import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import io from 'socket.io-client';
import messages from '../common/messages.js';

import styles from './scss/application.scss';

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

const socket = io();

socket.on(messages.io.message, function(data) {
  console.log(data);
});

// Let lobby know we've joined the page
socket.emit(messages.player.join);

render(
  <App />,
  document.getElementById('root')
);