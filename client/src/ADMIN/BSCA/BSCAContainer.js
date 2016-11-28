import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

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
          <li><NavLink to="/admin-console/bsca/view-course/123">Course One </NavLink></li>
          <li><NavLink to="/admin-console/bsca/view-course/456">Course Two </NavLink></li>
          <li><NavLink to="/admin-console/bsca/view-course/789">Course Three </NavLink></li>
          <li><NavLink to="/admin-console/bsca/view-course/980">Course Four </NavLink></li>
          <li><NavLink to="/admin-console/bsca/view-course/5454">Course Five </NavLink></li>
          <li><NavLink to="/admin-console/bsca/post-course"> Create Course </NavLink></li>
        </ul>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default BSCAContainer;
