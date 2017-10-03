import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/';
import ContactsList from './screens/ContactsList';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactsList />
      </Provider>
    )
  }
}