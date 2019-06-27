import React, { Component, Fragment } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AuthConsumer } from '../context/auth';

const UnAuthorized = () => (
  <Fragment>
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div>Hey, sorry but you are not authorized to view this page</div>

      <Link to="/auth" className="my-5 p-2 border">
        <span>Login</span>
      </Link>
    </div>
  </Fragment>
);

class PrivateRoute extends Component {
  render() {
    const { component: Component, history, ...rest } = this.props;

    // const { isLoggedIn } = this.context;

    const isLoggedIn = true;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn) {
            return <Component {...props} />;
          } else {
            return <UnAuthorized />;
          }
        }}
      />
    );
  }
}

PrivateRoute.contextType = AuthConsumer;

export default hot(module)(withRouter(PrivateRoute));
