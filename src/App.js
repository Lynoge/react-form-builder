import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './containers/Home';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
