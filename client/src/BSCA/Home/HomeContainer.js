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
      const footer = (
          <span className="res-footer res-courses flex-cats">
            <NavLink to={'/big-sky-code-academy/course/' + item._id}> <Arrow className="right-arrow"/> </NavLink>
          </span>
      )
      return (<Panel header={item.title} footer={footer}>
                {item.desc}
              </Panel>
          )
    }) : null
    return (
    <div>
      <Jumbotron className="student-jumbo">
        <h3 className="my-courses">My Courses</h3>
        <div>
          { availableCourses }
        </div>

      </Jumbotron>
    </div>
    )
  }
}

export default HomeContainer;
