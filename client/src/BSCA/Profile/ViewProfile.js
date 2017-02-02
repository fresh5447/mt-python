import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import NavLink from '../../Components/NavLink';
import Tweeter from 'react-icons/lib/fa/twitter';
import Github from 'react-icons/lib/fa/github';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Blog from 'react-icons/lib/fa/bullhorn';
import Website from 'react-icons/lib/fa/user';
import Email from 'react-icons/lib/fa/envelope-o'

const ViewProfile = (props) =>
<Jumbotron>
  <h3>{ props.user.local.firstName + " " + props.user.local.lastName }</h3>
  <p> <Email /> { props.user.local.email }</p>
  <p> <Tweeter /> { props.user.twitter ? props.user.twitter : "add Twitter"}</p>
  <p> <Linkedin/> { props.user.linkedIn ? props.user.linkedIn : "add LinkedIn"}</p>
  <p> <Github/> { props.user.github ? props.user.github : "add GitHub"}</p>
  <p> <Website/> { props.user.website ? props.user.website : "add Website"}</p>
  <p> <Blog/> { props.user.blog ? props.user.blog : "add Blog"}</p>

  <NavLink className="btn btn-primary my-primary-btn" to="/big-sky-code-academy/profile/edit"> Edit </NavLink>
</Jumbotron>

export default ViewProfile;
