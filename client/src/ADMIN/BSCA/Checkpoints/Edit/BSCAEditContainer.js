import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import EditCheckpointForm from './EditCheckpointForm';
import { Jumbotron, Button } from 'react-bootstrap';

class BSCAEditContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null,
      content: null,
      assignment: null
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
      desc: this.state.desc,
      assignment: this.state.assignment,
      content: this.state.content,
      publish: this.state.publish,
    };
    $.ajax({
      url: `/api/v2/checkpoints/${this.props.params.checkpoint_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('successfully edited checkpoint', d)
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
      console.log(data);
      this.setState({
        title: data.title,
        desc: data.desc,
        publish: data.publish,
        content: data.content,
        assignment: data.assignment
      });
      console.log(this.state)
    });
  }
  render() {
    return (this.state.title ? <EditCheckpointForm
      title={this.state.title}
      desc={this.state.desc}
      content={this.state.content}
      assignment={this.state.assignment}
      publish={this.state.publish}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : null
    )
  }
}

export default BSCAEditContainer;
