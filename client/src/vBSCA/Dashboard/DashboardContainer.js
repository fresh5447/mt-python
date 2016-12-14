import React, { Component } from 'react';
import browserHistory from 'react-router';
// import NavLink from '../../Components/NavLink';
import CourseList from './CourseList';
import $ from 'jquery';
import { Grid, Row, Col } from 'react-bootstrap';

class DashboardContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null,
      user: null
    };
    this.loadCourses = this.loadCourses.bind(this);
    this.loadUser = this.loadUser.bind(this);

  }

  componentWillMount(nextState, replace) {
    this.loadCourses();
    this.loadUser();
    console.log("MOUNTING COMPONENT")
  }
  loadUser(nextState, replace) {
    this.context.getUser((data) => {
      if (data.user === 'no user') {
        alert('you must be signed in to view this');
        return browserHistory.push('/login');
      } else {
        console.log("FOUND USER",data);
        return this.setState({
          user: data,
        });
      }
    });
  }
  componentWillReceiveProps() {
    this.loadCourses();
  }

  loadCourses() {
    //:TODO Load User Courses
    $.ajax({
      url: '/api/v2/courses',
      method: 'GET',
    }).done((data) => {
      console.log("FOUND COURSRS",data);
      this.setState({ courses: data });
    });
  }
  render() {
    return (
      <Grid>
        <Row>
            { this.state.courses ? (
              <CourseList courses={this.state.courses}/>
            )
              : <h1>Loading...</h1>
            }
        </Row>
      </Grid>
    )
  }
}

DashboardContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default DashboardContainer;
