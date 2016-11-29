import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

class BSCAContainer extends Component {
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
    const courseItems = this.state.courses ? this.state.courses.map((item) => {
      return <li><NavLink to={"/admin-console/bsca/courses/view/" + item._id }>{ item.title } </NavLink></li>
    }) : null;
    return (
    <div>
      <Jumbotron>
        <h3>Big Sky Code Academy ( courses )</h3>
        <ul>
          { courseItems }
          <li><NavLink to="/admin-console/bsca/courses/post/">Create New Course</NavLink></li>
        </ul>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default BSCAContainer;
