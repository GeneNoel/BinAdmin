import React, { Component, Fragment } from 'react';
import { DashboardWrapper } from '../../components/shared';
import { hot } from 'react-hot-loader';

class SettingsPage extends Component {
  render() {
    return (
      <Fragment>
        <DashboardWrapper>OKay okay Settings Page here</DashboardWrapper>
      </Fragment>
    );
  }
}

export default hot(module)(SettingsPage);
