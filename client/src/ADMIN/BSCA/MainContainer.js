import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';

class BSCAMainContainer extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="admin-jumbo">
          <h3>Big Sky Code Academy</h3>
          <NavLink to="/admin-console/bsca/courses">Courses</NavLink>
          <p></p>
          <NavLink to="/admin-console/bsca/resources">Resources</NavLink>
        </Jumbotron>
        { this.props.children }
      </div>
    )
  }
}

export default BSCAMainContainer;
