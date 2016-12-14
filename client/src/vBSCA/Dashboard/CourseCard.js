import React from 'react';
import { Panel } from 'react-bootstrap'

const CourseCard = (props) =>
  <Panel title={props.c.title} footer={"Complete"}>
    { props.desc }
  </Panel>
export default CourseCard;
