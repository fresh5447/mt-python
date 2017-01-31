import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostModuleForm from './PostModuleForm';
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
      publish: published,
      course: this.props.params.course_id
    };
    $.ajax({
      url: `/api/v2/modules`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Module Posted");
      const path = `/admin-console/bsca/course/${this.props.params.course_id}/modules`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostModuleForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

BSCAPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAPostContainer;
