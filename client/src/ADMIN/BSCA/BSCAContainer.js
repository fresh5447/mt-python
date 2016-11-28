import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import { Jumbotron, Button } from 'react-bootstrap';

const courses = [
  {
    title: "Intro to web dev",
    enrolled: true,
    desc: "just a cool course about web stuff"
  },
  {
    title: "Web Dev Foundations",
    enrolled: true,
    desc: "just some more cool course about web stuff"
  },
  {
    title: "Advanced Web Developement",
    enrolled: false,
    desc: "just some more cool course about web stuff"
  },
]

const availableItems = courses.filter((item) => {
  return item.enrolled
}).map((item) => {
  return <li> <NavLink to={'/big-sky-code-academy/course/' + item.title}> {item.title}</NavLink> </li>
})

const unavailableItems = courses.filter((item) => {
  return !item.enrolled
}).map((item) => {
  return <li> {item.title} </li>
})


class BSCAContainer extends Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>Big Sky Code Academy</h3>
        <ul>
        </ul>
      </Jumbotron>
      <Jumbotron>
        <h3>Other Courses</h3>
        <ul>
        </ul>
      </Jumbotron>
      <Jumbotron>
        <h3>User Profile</h3>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Edit</Button></p>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAContainer;
