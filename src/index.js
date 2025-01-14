import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import App from './App'; // Your main App component

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
