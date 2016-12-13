import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostResourceForm from './PostResourceForm';
import $ from 'jquery';

class BSCAPostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      content: null,
      link: null,
      desc: null,
      publish: null,
      internal: null
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
    const int = this.state.internal == null ? false : true;
    const data = {
      title: this.state.title,
      content: this.state.content,
      desc: this.state.desc,
      link: this.state.link,
      publish: published,
      internal: int
    };
    $.ajax({
      url: `/api/v2/resources`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Posted");
      const path = `/admin-console/bsca`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    internal={this.state.internal}
    content={this.state.content}
    handleSubmit={this.handleSubmit}
    />;
  }

}

BSCAPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAPostContainer;
