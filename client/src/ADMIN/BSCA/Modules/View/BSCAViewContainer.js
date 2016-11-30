import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount(props) {
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.params.module_id);
  }


  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.module ? this.state.module.title : "loading..."}</h3>
        <NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/modules/edit/" + this.props.params.module_id}>Edit Module Info</NavLink>
        <NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id}>GO THERE BABYYY</NavLink>
        <p></p>
        <p>{this.state.module ? "Desription: " + this.state.module.desc : "loading..."}</p>
        <p>{this.state.module ? "Publish: " + this.state.module.publish.toString() : "loading..."}</p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
