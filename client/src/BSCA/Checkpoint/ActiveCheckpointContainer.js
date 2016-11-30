import React, { Component } from 'react';
import $ from 'jquery';
import { Grid, Row, Col } from 'react-bootstrap';


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
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3>{ this.state.checkpoint ? this.state.checkpoint.title : null }</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>{ this.state.checkpoint ? this.state.checkpoint.desc : null }</p>
            <p>{ this.state.checkpoint ? this.state.checkpoint.content : null }</p>
            <p>{ this.state.checkpoint ? this.state.checkpoint.assignment : null }</p>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default ActiveCheckpointContainer;
