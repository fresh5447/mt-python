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
        <p className="center-text">{this.state.course ? this.state.course.desc : "Loading Desc"}</p>
        <NavLink to={"/big-sky-code-academy/home/"}><LeftArrow className="left-arrow"/></NavLink>
      </div>
      <div className="">
        { this.state.course ?
          this.state.course.modules.map((item)=> {
            const footer = (
                <span className="res-footer res-courses flex-cats">
                  <NavLink to={"big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + item._id}> <RightArrow className="right-arrow"/></NavLink>
                </span>
            )
            return (
              <div className="">
                <Panel header={item.title} footer={footer}>
                  <p>{item.desc}</p>
                </Panel>
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
