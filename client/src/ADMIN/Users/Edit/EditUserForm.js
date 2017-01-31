import React from 'react';
import $ from "jquery";
// import { Jumbotron, Table } from 'react-bootstrap';

const EditUserForm = (props) =>
<div>
  <div>
    <p> { props.user.local.firstName + " " + props.user.local.lastName  }</p>
    <p> { props.user.local.email }</p>
  </div>
  <div>
    <h3>Courses</h3>
    <ul>
      { props.user.courses.length > 0 ? props.user.courses.map( (i) => {
        var btn = i.enrolled ? <button> Remove </button> : <button>Add</button>
        return <li> { i.title } {btn}</li>
    }) : <li> No Courses</li> }
    </ul>
  </div>
</div>


export default EditUserForm;
