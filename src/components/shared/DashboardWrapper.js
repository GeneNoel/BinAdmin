import React, { Component, Fragment } from 'react';
import { Navbar, Sidenav } from './index';
import { hot } from 'react-hot-loader';

class DashboardWrapper extends Component {
  render() {
    const { children: Component } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className="w-full max-w-screen-xl overflow-hidden mx-auto px-6">
          <div className="lg:flex -mx-6">
            <Sidenav />
            <div className="min-h-screen h-screen w-full lg:static overflow-y-scroll lg:max-h-full lg:w-3/4 xl:w-4/5 pb-24 px-12 pt-10">
              {Component}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default hot(module)(DashboardWrapper);
