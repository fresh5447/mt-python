import React from 'react';
import $ from "jquery";
import NavLink from "../../../Components/NavLink";
// import { Jumbotron, Table } from 'react-bootstrap';

const ViewUser = (props) =>
<div>
  <div>
    {/* <NavLink to={"/admin-console/users/edit/" + props.user._id}>Edit </NavLink> */}
    <p> { props.user.local.firstName + " " + props.user.local.lastName  }</p>
    <p> { props.user.local.email }</p>
  </div>
  <div>
    <h3>Enrolled Courses</h3>
    <ul>
      { props.user.courses.length > 0 ? props.user.courses.map( (i) => {
        var u = props.user._id;
        var c = i._id;
        var btn = i.enrolled ? <button onClick={props.toggleUserCourse.bind(this,u,c,"remove")} className="btn btn-danger"> Remove </button> : <button onClick={props.toggleUserCourse.bind(this,u,c,"post")} className="btn btn-primary">Add</button>
        return <li> { i.title } {btn}</li>
    }) : <li> No Courses</li> }
    </ul>
  </div>
</div>


export default ViewUser;
