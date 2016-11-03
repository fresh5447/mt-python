import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from './events-data';

BigCalendar.momentLocalizer(moment);

let MyCalender = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        step={15}
        timeslots={8}
        events={events}
        defaultDate={new Date()}
      />
    )
  }
})

export default MyCalender;
