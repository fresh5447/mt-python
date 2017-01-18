import React, { Component } from 'react';
import $ from 'jquery';
import ViewProfile from './ViewProfile';

class ProfileContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    this.context.getUser(data => this.setState({ user: data }))
    window.r = this.state.user
  }


  render() {
    return this.state.user ? <ViewProfile user={this.state.user}/> : <div>Loading...</div>
  }
}



ProfileContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
}
export default ProfileContainer;
