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
  }

  componentWillMount() {
    this.loadUser();
  }

  componentWillReceiveProps() {
    this.loadUser();
  }

  loadUser(){
    $.ajax({
      url: '/loadUser',
      method: 'GET',
    }).done((data) => {
      const courses = data.courses.filter(c => c.enrolled);
      this.setState({ courses: courses });
    });
  }
  render() {
    const availableCourses = this.state.courses ? this.state.courses.map((item) => {
      return <li> <NavLink to={'/big-sky-code-academy/course/' + item._id}> {item.title}</NavLink> </li>
    }) : null
    return (
    <div>
      <Jumbotron className="student-jumbo">
        <h3>Enrolled Courses</h3>
        <ul>
          { availableCourses }
        </ul>
      </Jumbotron>
    </div>
    )
  }
}

export default HomeContainer;
