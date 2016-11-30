import React, { Component } from 'react';
import AuthoredDashboardView from './AuthoredDashboardView';
import GuestDashboardView from './GuestDashboardView';
import '../App.css';

class DashboardContainer extends Component {

  render() {
    return this.props.user ? <AuthoredDashboardView user={this.props.user} /> : <GuestDashboardView />
  }
}

export default DashboardContainer;
