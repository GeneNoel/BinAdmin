import React, { Fragment, Component, createContext } from 'react';
import api from '../api/routes';
const AuthContext = createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      currentUser: null,
      error: null,
    };

    this.signupUser = this.signupUser.bind(this);
  }

  async signupUser(data) {
    const response = await api.auth.signup(data);
    console.log(response, 'shit like thats');
  }

  render() {
    const { isLoggedIn, currentUser, error } = this.state;

    return (
      <Fragment>
        <AuthContext.Provider
          value={{
            isLoggedIn,
            currentUser,
            error,
            signupUser: this.signupUser,
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

const AuthConsumer = AuthContext;

export { AuthConsumer, AuthProvider };
