import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillMount(props) {
    this.loadCourse(this.props.params.course_id);
  }

  // componentWillReceiveProps() {
  //   this.loadCourse(this.props.params.course_id);
  // }

  componentDidUpdate (prevProps) {
      let oldId = prevProps.params.course_id
      let newId = this.props.params.course_id
      if (newId !== oldId){
        this.loadCourse(this.props.params.course_id)
      }
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
    <div>
      <Jumbotron>
        <h3>{this.state.course ? this.state.course.title : "loading..."}</h3>
        <NavLink to={ "/admin-console/bsca/courses/edit/" + this.props.params.course_id}>Edit Course Info</NavLink>
        <p></p>
        <NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/modules"}>TAKE ME THERE</NavLink>

        <p></p>
        <p>{this.state.course ? "Desription: " + this.state.course.desc : "loading..."}</p>
        <p>{this.state.course ? "Publish: " + this.state.course.publish.toString() : "loading..."}</p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
