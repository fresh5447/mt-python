import React, { Component } from 'react';
import AttendanceView from './AttendanceView';
import session from './class-data';

class AttendanceContainer extends Component {
  render() {
    return <AttendanceView session={session}/>
  }
}

export default AttendanceContainer;
