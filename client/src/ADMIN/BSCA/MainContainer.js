import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';

class BSCAMainContainer extends Component {
  render() {
    return (
      <div className="student-course-container">
        <ul>
          <li className="btn"><NavLink to="/admin-console/bsca/courses">Courses</NavLink></li>
          <li className="btn"><NavLink to="/admin-console/bsca/resources">Resources</NavLink></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

export default BSCAMainContainer;
