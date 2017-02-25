import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import LeftArrow from 'react-icons/lib/fa/arrow-left';

import { Button, Panel } from 'react-bootstrap';

class ActiveCourseContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
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
    return (
    <div className="container col-sm-10 col-sm-offset-1">
      <div className="student-course-container">
        <h3 className="my-courses">{this.state.course ? this.state.course.title : "Loading Title"}</h3>
        <p className="">{this.state.course ? this.state.course.desc : "Loading Desc"}</p>
        <NavLink className="" to={"/big-sky-code-academy/home/"}><LeftArrow className="left-arrow"/><strong>back</strong></NavLink>
      </div>
      <div className="active-course-list-flex">
        { this.state.course ?
          this.state.course.modules.map((item)=> {
            return (
              <div className="course-panel panel panel-default">
                        <div className="panel-heading active-course-heading">
                          <h3 className="panel-title">{item.title}</h3>
                        </div>
                        <div className="panel-body">
                          {item.desc}
                          <NavLink to={"big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + item._id}> <RightArrow className="right-arrow"/></NavLink>
                        </div>
                      </div>

            )
          })
          : null }
      </div>
    </div>
    )
  }
}

export default ActiveCourseContainer;
