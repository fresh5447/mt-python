import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
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
      console.log(data);
      this.setState({ module: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.module ? this.state.module.title : "loading..."}</h3>
        {/* <NavLink to={ "/admin-console/bsca/edit-course/" + this.props.params.course_id}>Edit Course Info</NavLink> */}
        <p></p>
        <p>{this.state.module ? "Desription: " + this.state.module.desc : "loading..."}</p>
        <p>{this.state.module ? "Publish: " + this.state.module.publish.toString() : "loading..."}</p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
