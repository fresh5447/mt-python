import React, { Component } from 'react';
import Calendar from '../Components/Calendar';
import '../App.css';

const divStyle = {
  height: "1500px",
  width: "80%",
  marginLeft: "10%",
  marginRight: "10%",
}

class ScheduleView extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <h2>Montana Code Girls Schedule</h2>
        </div>
        <div style={divStyle}>
          <Calendar/>
        </div>

      </div>
    );
  }
}

export default ScheduleView;
