import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
// import ModulesList from './ModulesList';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

class ActiveCourseContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillMount(props) {
    console.log('PROPS', props)
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
      console.log(data);
      this.setState({ course: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.course ? this.state.course.title : "Loading Title"}</h3>
        <p>{this.state.course ? this.state.course.desc : "Loading Desc"}</p>
        <p>0/4 Modules Complete</p>
      </Jumbotron>
      <Jumbotron>
        { this.state.course ?
          this.state.course.modules.map((item)=> {
            return (
              <Panel header={item.title} footer={<NavLink to={"big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + item._id}>GO</NavLink>}>
                <p>{item.desc}</p>
              </Panel>
            )
          })
          : null }
      </Jumbotron>
    </div>
    )
  }
}

export default ActiveCourseContainer;
