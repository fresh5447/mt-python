import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkpoint: null
    };
  }

  componentWillMount(props) {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  componentWillReceiveProps() {
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
    <div>
      <Jumbotron>
        <h3>{this.state.checkpoint ? this.state.checkpoint.title : "loading..."}</h3>
        <NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/edit/" + this.props.params.checkpoint_id}>Edit</NavLink>
        <p></p>
        <p>{this.state.checkpoint ? "Desription: " + this.state.checkpoint.desc : "loading..."}</p>
        <p>{this.state.checkpoint ? "Content: " + this.state.checkpoint.content : "loading..."}</p>
        <p>{this.state.checkpoint ? "Assignment: " + this.state.checkpoint.assignment : "loading..."}</p>
        <p>{this.state.checkpoint ? "Publish: " + this.state.checkpoint.publish.toString() : "loading..."}</p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
