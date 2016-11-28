import React, { Component } from 'react';
import NavLink from '../../../Components/NavLink';
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


class BSCAEditContainer extends Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>Edit Course {this.props.params.course_id}</h3>
        <ul>
        </ul>
      </Jumbotron>
    </div>
    )
  }
}

export default BSCAEditContainer;
