import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class ActiveCourseContainer extends Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.props.params.course_title}</h3>
      </Jumbotron>
    </div>
    )
  }
}

export default ActiveCourseContainer;
