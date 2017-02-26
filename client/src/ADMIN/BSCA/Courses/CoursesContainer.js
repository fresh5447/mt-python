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
      var published = item.publish ? <span className="live-course">live</span> : <span className="draft-course">draft</span>
      return (
        <div className="admin-course-panel panel panel-default">
                  <div className="panel-heading active-course-heading">
                    <h3 className="panel-title">{item.title} {published}</h3>
                  </div>
                  <div className="panel-body">
                    {item.desc}
                    {/* <NavLink to={"/admin-console/bsca/courses/view/" + item._id }> { item.title }  </NavLink> */}
                   </div>
                   <div className="panel-footer">
                     <NavLink className="btn btn-success"  to={"/admin-console/bsca/course/" + item._id + "/modules"}> Go </NavLink>
                     <NavLink className="btn btn-warning" to={"/admin-console/bsca/courses/edit/" + item._id }> Edit </NavLink>
                   </div>
                </div>
      )
    }) : null;
    return (
    <div>
      { this.props.children }
      <div className="admin-jumbo admin-course-list-flex">
          { courseItems }
            <NavLink to="/admin-console/bsca/courses/post/" className="admin-course-panel panel button-panel">Create Course</NavLink>
      </div>
    </div>
    )
  }
}

export default BSCAContainer;
