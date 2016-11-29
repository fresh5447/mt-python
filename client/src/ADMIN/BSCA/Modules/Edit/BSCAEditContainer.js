import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import EditCourseForm from './EditCourseForm';
import { Jumbotron, Button } from 'react-bootstrap';

class BSCAEditContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null
    };
  }

  componentWillMount() {
    this.loadCourse(this.props.params.course_id);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.course_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      publish: this.state.publish,
    };
    $.ajax({
      url: `/api/v2/courses/${this.props.params.course_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      console.log('successfully edited course', d)
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadCourse(id) {
    $.ajax({
      url: '/api/v2/courses/' + this.props.params.course_id,
      method: 'GET',
    }).done((data) => {
      console.log(data);
      this.setState({
        title: data.title,
        desc: data.desc,
        publish: data.publish,
      });
      console.log(this.state)
    });
  }
  render() {
    return (this.state.title ? <EditCourseForm
      title={this.state.title}
      desc={this.state.desc}
      publish={this.state.publish}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : null
    )
  }
}

export default BSCAEditContainer;
