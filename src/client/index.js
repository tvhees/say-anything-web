import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import styles from './scss/application.scss';

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

render(
  <App />,
  document.getElementById('root')
);