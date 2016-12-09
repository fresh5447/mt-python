import React, { Component } from 'react';
import AuthoredDashboardView from './AuthoredDashboardView';
import GuestDashboardView from './GuestDashboardView';

class DashboardContainer extends Component {

  render() {
    window.u = this.props.user;
    return this.props.user && this.props.user.local ? <AuthoredDashboardView user={this.props.user} /> : <GuestDashboardView />
  }
}

export default DashboardContainer;
