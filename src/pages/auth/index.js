import React, { Component, Fragment } from 'react';
import { LoginForm, SignupForm } from '../../components/forms';
import { AuthConsumer } from '../../context/auth';

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      error: null,
    };
  }

  toggleActiveForm = () => {
    this.setState((state) => {
      return { login: !state.login };
    });
  };

  collectFormData = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  handleSignup = (data) => {
    const { signupUser, error } = this.context;

    signupUser(data);
  };

  render() {
    const { login } = this.state;

    return (
      <Fragment>
        <div className="min-h-screen flex justify-center items-center">
          {login ? (
            <LoginForm collectFormData={this.collectFormData} toggleForm={this.toggleActiveForm} />
          ) : (
            <SignupForm collectFormData={this.handleSignup} toggleForm={this.toggleActiveForm} />
          )}
        </div>
      </Fragment>
    );
  }
}

AuthPage.contextType = AuthConsumer;

export default AuthPage;
