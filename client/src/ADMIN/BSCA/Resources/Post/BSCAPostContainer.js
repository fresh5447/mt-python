import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostResourceForm from './PostResourceForm';
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
      publish: published
    };
    console.log(data)
    $.ajax({
      url: `/api/v2/courses`,
      method: 'POST',
      data
    }).done((d) => {
      const path = `/admin-console/bsca`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

export default BSCAPostContainer;
