import React, { Component } from 'react';
import $ from 'jquery';
import EditCheckpointForm from './EditCheckpointForm';

class BSCAEditContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      publish: null,
      content: null,
    };
  }

  componentWillMount() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  componentWillReceiveProps() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
      publish: this.state.publish,
    };
    $.ajax({
      url: `/api/v2/checkpoints/${this.props.params.checkpoint_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification('successfully edited checkpoint');
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadCheckpoint(id) {
    $.ajax({
      url: '/api/v2/checkpoints/' + this.props.params.checkpoint_id,
      method: 'GET',
    }).done((data) => {
      this.setState({
        title: data.title,
        publish: data.publish,
        content: data.content
      });
    });
  }
  render() {
    return (this.state.title ? <EditCheckpointForm
      title={this.state.title}
      content={this.state.content}
      publish={this.state.publish}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : null
    )
  }
}

BSCAEditContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default BSCAEditContainer;
