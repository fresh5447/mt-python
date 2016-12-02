import React, { Component } from 'react';
import AuthoredDashboardView from './AuthoredDashboardView';
import GuestDashboardView from './GuestDashboardView';

class DashboardContainer extends Component {

  render() {
    return this.props.user ? <AuthoredDashboardView user={this.props.user} /> : <GuestDashboardView />
  }
}

export default DashboardContainer;
