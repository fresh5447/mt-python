import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

class BSCAContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: []
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
      var published = item.publish ? <span className="live-course"></span> : <span className="draft-course">draft</span>
      return (
        <tr>
          <td><NavLink to={"/admin-console/bsca/courses/view/" + item._id }> { item.title } {published} </NavLink></td>
          <td><NavLink to={"/admin-console/bsca/courses/edit/" + item._id }> Edit </NavLink></td>
          <td><NavLink to={"/admin-console/bsca/course/" + item._id + "/modules"}> Go </NavLink></td>
        </tr>
      )
    }) : null;
    return (
    <div>
      <Jumbotron className="admin-jumbo">
        <p>Courses</p>
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { courseItems }
            </tbody>
          </Table>
          <NavLink to="/admin-console/bsca/courses/post/" className="btn btn-primary">Create Course</NavLink>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default BSCAContainer;
