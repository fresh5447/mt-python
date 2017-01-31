import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostCheckpointForm from './PostCheckpointForm';
import $ from 'jquery';

class BSCAPostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null,
      content: null,
      assignment: null,
      module: null
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
      content: this.state.content,
      publish: published,
      assignment: this.state.assignment,
      module: this.props.params.module_id
    };
    $.ajax({
      url: `/api/v2/checkpoints`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Checkpoint Created");
      const path = `/admin-console/bsca/course/${this.props.params.course_id}/module/${this.props.params.module_id}`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostCheckpointForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    title={this.state.title}
    desc={this.state.desc}
    content={this.state.content}
    assignment={this.state.assignment}
    handleSubmit={this.handleSubmit}
    />;
  }

}

BSCAPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default BSCAPostContainer;
