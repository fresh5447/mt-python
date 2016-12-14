import React from 'react';
import CourseCard from './CourseCard'

const CourseList = (props) =>
  props.courses.map((item) => <CourseCard c={item.course}/>)

export default CourseList;
