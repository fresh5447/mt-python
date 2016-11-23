import React, { Component } from 'react';
import AttendanceView from './AttendanceView';
import session from './class-data';
import '../App.css';

console.log(session)

class AttendanceContainer extends Component {
  render() {
    return <AttendanceView session={session}/>
  }
}

export default AttendanceContainer;
