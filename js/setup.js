
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import firebase from 'firebase';
import firebaseConfig from './firebase.config';
import configureStore from './configureStore';

function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();

      firebase.initializeApp(firebaseConfig);
      console.log(firebase.app());
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
