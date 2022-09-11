import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'; //Hiyerarşimizin en tepesi
import { createStore } from 'redux';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />,
  </Provider>,

  document.querySelector('#root')
);
