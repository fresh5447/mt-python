import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

class ModulesContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: null
    };
    this.loadCourse = this.loadCourse.bind(this);
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
    // const courseItems = this.state.courses ? this.state.courses.map((item) => {
    //   return <li><NavLink to={"/admin-console/bsca/view-course/" + item._id }>{ item.title } </NavLink></li>
    // }) : null;
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.course ? this.state.course.title : null}</h3>
        <ul>
          <li>Module Number One</li>
          <li>Module Number Dos</li>
          <li>Module Number Tres</li>
          <li>Module Number Quatro</li>
          <li><NavLink to={"/admin-console/bsca/course/" + this.props.params.course_id + "/modules/post/"}>Create New Module</NavLink></li>
        </ul>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default ModulesContainer;
