import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import AppView from './routes/index';
import { AuthProvider } from './context/auth';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AuthProvider>
          <AppView />
        </AuthProvider>
      </Fragment>
    );
  }
}

export default hot(module)(App);
