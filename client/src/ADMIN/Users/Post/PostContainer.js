import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostUserForm from './PostUserForm';
import $ from 'jquery';

class UserPostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      role: null,
      authOrgs: null,
      authCourses: null
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const published = this.state.publish == null ? false : true;
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      role: this.state.role,
      authOrgs: this.state.authOrgs,
      authCourses: this.state.authCourses,
    };
    $.ajax({
      url: `/signup`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("USER Posted");
      const path = `/admin-console/users`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostUserForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

UserPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default UserPostContainer;
