import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import NavLink from '../../Components/NavLink';

const ViewProfile = (props) =>
<Jumbotron>
  <h3>{ props.user.local.firstName + " " + props.user.local.lastName }</h3>
  <p>{ props.user.local.email }</p>
  <p>twitter: { props.user.twitter ? props.user.twitter : "please update"}</p>
  <p>linkedIn: { props.user.linkedIn ? props.user.linkedIn : "please update"}</p>
  <p>github: { props.user.github ? props.user.github : "please update"}</p>
  <p>website: { props.user.website ? props.user.website : "please update"}</p>
  <p>blog: { props.user.blog ? props.user.blog : "please update"}</p>

  <NavLink className="btn btn-primary my-primary-btn" to="/big-sky-code-academy/profile/edit"> Edit </NavLink>
</Jumbotron>

export default ViewProfile;
