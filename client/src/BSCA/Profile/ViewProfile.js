import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const ViewProfile = (props) =>
<Jumbotron>
  <h3>User Info</h3>
  <p>{ props.user.local.firstName + " " + props.user.local.lastName }</p>
  <p>{ props.user.local.email }</p>
  <p><Button bsStyle="primary">Edit</Button></p>
</Jumbotron>

export default ViewProfile;
