import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// const modules = [
//   {
//     title: "Mod One",
//     complete: true,
//     desc: "just a cool course about web stuff"
//   },
//   {
//     title: "Mod Two",
//     complete: true,
//     desc: "just some more cool course about web stuff"
//   },
//   {
//     title: "Mod Three",
//     enrolled: false,
//     desc: "just some more cool course about web stuff"
//   },
// ]
//
// const availableItems = courses.filter((item) => {
//   return item.enrolled
// }).map((item) => {
//   return <li> {item.title} </li>
// })
//
// const unavailableItems = courses.filter((item) => {
//   return !item.enrolled
// }).map((item) => {
//   return <li> {item.title} </li>
// })


class ActiveCourseContainer extends Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>{this.props.params.course_title}</h3>
      </Jumbotron>
    </div>
    )
  }
}

export default ActiveCourseContainer;
