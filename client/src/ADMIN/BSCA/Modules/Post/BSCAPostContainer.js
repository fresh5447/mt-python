import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostModuleForm from './PostModuleForm';
import $ from 'jquery';

class BSCAPostContainer extends Component {
  constructor(props) {
    super(props);

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
    console.log(data)
    $.ajax({
      url: `/api/v2/modules`,
      method: 'POST',
      data
    }).done((d) => {
      const path = `/admin-console`
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

export default BSCAPostContainer;
