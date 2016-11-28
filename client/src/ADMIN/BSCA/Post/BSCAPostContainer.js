import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NavLink from '../../../Components/NavLink';
import PostCourseForm from './PostCourseForm';
import { Jumbotron, Button } from 'react-bootstrap';

class BSCAPostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      publish: this.state.publish
    };
    console.log(data)
  }

  render() {
    return <PostCourseForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    />;
  }

}

export default BSCAPostContainer;
