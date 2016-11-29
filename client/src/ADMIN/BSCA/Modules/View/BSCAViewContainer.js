import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
    this.loadCourse(this.props.params.course_id);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.course_id);
  }


  loadCourse(id) {
    $.ajax({
      url: '/api/v2/courses/' + id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({ course: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.course ? this.state.course.title : "loading..."}</h3>
        <NavLink to={ "/admin-console/bsca/edit-course/" + this.props.params.course_id}>Edit Course Info</NavLink>
        <p></p>
        <p>{this.state.course ? "Desription: " + this.state.course.desc : "loading..."}</p>
        <p>{this.state.course ? "Publish: " + this.state.course.publish.toString() : "loading..."}</p>
      </Jumbotron>
      <Jumbotron>
        <h3>Modules</h3>
        <Panel title="Module Number One" footer="Just the footer">
          View Me or Edit Info
        </Panel>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
