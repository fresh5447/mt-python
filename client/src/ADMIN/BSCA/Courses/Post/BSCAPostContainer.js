import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostCourseForm from './PostCourseForm';
import $ from 'jquery';

class BSCAPostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null
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
      title: this.state.title,
      desc: this.state.desc,
      publish: published
    };
    $.ajax({
      url: `/api/v2/courses`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Course Posted");
      const path = `/admin-console/bsca`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostCourseForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

BSCAPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAPostContainer;
