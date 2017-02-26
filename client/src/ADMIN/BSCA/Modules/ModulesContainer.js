import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

class ModulesContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: null
    };
    this.loadCourse = this.loadCourse.bind(this);
  }

  componentWillMount(props) {
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
      this.setState({ course: data });
    });
  }
  render() {
    const modulesItems = this.state.course ? this.state.course.modules.map((item) => {
      var published = item.publish ? <span className="live-course">live</span> : <span className="draft-course">draft</span>
      return (
        <div className="admin-course-panel panel panel-default">
                  <div className="panel-heading active-course-heading">
                    <h3 className="panel-title">{item.title} { published }</h3>
                  </div>
                  <div className="panel-body">
                    {item.desc}
                   </div>
                   <div className="panel-footer">
                    <NavLink className="btn btn-success" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + item._id}>Go</NavLink>
                    <NavLink className="btn btn-warning" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/modules/edit/" + item._id}>Edit</NavLink>
                   </div>
                </div>
      )
    }) : null;
    return (
    <div>
      { this.props.children }
        <h3>{this.state.course ? this.state.course.title : null}</h3>
        <div className="admin-jumbo admin-course-list-flex">
            { modulesItems }
        <NavLink className="admin-course-panel panel button-panel" to={"/admin-console/bsca/course/" + this.props.params.course_id + "/modules/post/"}>Create Module</NavLink>
        </div>
    </div>
    )
  }
}

export default ModulesContainer;
