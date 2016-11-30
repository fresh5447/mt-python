import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      resource: null
    };
  }

  componentWillMount(props) {
    this.loadResource(this.props.params.resource_id);
  }

  componentWillReceiveProps() {
    this.loadResource(this.props.params.resource_id);
  }


  loadResource(id) {
    $.ajax({
      url: '/api/v2/resources/id/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ resource: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <NavLink to={ "/admin-console/bsca/resources/edit/" + this.props.params.resource_id}>Edit Course Info</NavLink>
        <h3>{this.state.resource ? this.state.resource.title : "loading..."}</h3>
        <p></p>
        <p></p>
        <p>{this.state.resource ? "Content: " + this.state.resource.content : "loading..."}</p>
        <p>{this.state.resource ? "Link: " + this.state.resource.link : "loading..."}</p>
        <p>{this.state.resource ? "Desription: " + this.state.resource.desc : "loading..."}</p>
        <p>{this.state.resource ? "Publish: " + this.state.resource.publish.toString() : "loading..."}</p>
        <p>{this.state.resource ? "Internal: " + this.state.resource.internal.toString() : "loading..."}</p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
