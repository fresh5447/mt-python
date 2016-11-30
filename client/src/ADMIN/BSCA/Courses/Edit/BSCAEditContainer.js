import React, { Component } from 'react';
import $ from 'jquery';
import EditCourseForm from './EditCourseForm';

class BSCAEditContainer extends Component {
  constructor(props, context) {
    super(props, context);

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
      this.context.sendNotification("Course Edit Success");
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
      this.setState({
        title: data.title,
        desc: data.desc,
        publish: data.publish,
      });
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

BSCAEditContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAEditContainer;
