import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { urqlClient } from './urql/client';
import App from './App';
import './index.scss';

ReactDOM.render(
  <Provider value={urqlClient}>
    <App />
  </Provider>,
  document.getElementById('root')
);
