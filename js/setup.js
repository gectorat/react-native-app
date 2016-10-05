
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import App from './App';
import firebaseConfig from './firebase.config';
import configureStore from './configureStore';

function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();

      global.firebase = firebase;
      firebase.initializeApp(firebaseConfig);

      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
