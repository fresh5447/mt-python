import React, { Component } from 'react';
import $ from 'jquery';
import CheckpointView from './CheckpointView';



class ActiveCheckpointContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkpoint: null
    };
  }

  componentWillMount() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  componentWillReceiveProps() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  componentWillUnmount() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }


  loadCheckpoint(id) {
    $.ajax({
      url: '/api/v2/checkpoints/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
    });
  }
  render() {
    return this.state.checkpoint ? <CheckpointView checkpoint={this.state.checkpoint}/> : null;
  }
}

export default ActiveCheckpointContainer;
