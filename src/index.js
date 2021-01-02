import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import mainReducer from './redux/reducers/Reducer';
import { Provider } from 'react-redux';
import './index.css'


const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root'));