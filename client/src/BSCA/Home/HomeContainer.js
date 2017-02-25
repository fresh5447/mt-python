import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import $ from 'jquery';
import { Jumbotron, Panel } from 'react-bootstrap';
import Arrow from 'react-icons/lib/fa/arrow-right';

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
      return (<div className="course-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">{item.title}</h3>
                  <img role="presentation" src={item.imgUrl} className="course-img"/>
                </div>
                <div className="panel-body">
                  {item.desc}
                  <NavLink to={'/big-sky-code-academy/course/' + item._id}> <Arrow className="right-arrow"/> </NavLink>
                </div>

              </div>
          )
    }) : null
    return (
    <div>
      <Jumbotron className="student-jumbo">
        <h3 className="my-courses">Available Courses</h3>
        <div className="course-list-flex">
          { availableCourses }
        </div>

      </Jumbotron>
    </div>
    )
  }
}

export default HomeContainer;
