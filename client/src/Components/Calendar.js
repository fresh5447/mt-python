import React, { PropTypes } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events-data';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        defaultDate={new Date()}
      />
    )
  }
})

export default Basic;
