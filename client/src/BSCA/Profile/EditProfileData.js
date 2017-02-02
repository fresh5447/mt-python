import React, { Component } from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import EditProfile from './EditProfile';

class EditProfileData extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      user: null,
      twitter: null,
      github: null,
      linkedIn: null,
      blog: null,
      website: null,
    };
  }

  componentWillMount() {
    this.context.getUser(data => this.setState({
      user: data,
      twitter: data.twitter,
      github: data.github,
      blog: data.blog,
      linkedIn: data.linkedIn,
      website: data.website,
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      twitter: this.state.twitter,
      github: this.state.github,
      linkedIn: this.state.linkedIn,
      blog: this.state.blog,
      website: this.state.website,
    };
    $.ajax({
      url: `/editUser`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("User Edit Success");
      const path = `/big-sky-code-academy/profile`
      browserHistory.push(path);
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  render() {
    return this.state.user ? <EditProfile
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      user={this.state.user}
      twitter={this.state.twitter}
      linkedIn={this.state.linkedIn}
      github={this.state.github}
      blog={this.state.blog}
      website={this.state.website}

      /> : <div>Loading...</div>
  }
}



EditProfileData.contextTypes = {
  getUser: React.PropTypes.func.isRequired,
  sendNotification: React.PropTypes.func.isRequired
}
export default EditProfileData;
