import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import $ from 'jquery';
import { Jumbotron, Button } from 'react-bootstrap';

class HomeContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null
    };
    this.loadCourses = this.loadCourses.bind(this);
  }

  componentWillMount() {
    this.loadCourses();
  }

  componentWillReceiveProps() {
    this.loadCourses();
  }

  loadCourses() {
    $.ajax({
      url: '/api/v2/courses',
      method: 'GET',
    }).done((data) => {
      this.setState({ courses: data });
    });
  }
  render() {
    const availableCourses = this.state.courses ? this.state.courses.map((item) => {
      return <li> <NavLink to={'/big-sky-code-academy/course/' + item._id}> {item.title}</NavLink> </li>
    }) : null
    return (
    <div>
      <Jumbotron>
        <h3>Enrolled Courses</h3>
        <ul>
          { availableCourses }
        </ul>
      </Jumbotron>
      <Jumbotron>
        <h3>User Profile</h3>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Edit</Button></p>
      </Jumbotron>
    </div>
    )
  }
}

export default HomeContainer;
