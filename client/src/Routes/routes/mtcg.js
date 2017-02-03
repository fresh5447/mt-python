import React from 'react';
import { Route } from 'react-router';

import MTCG from '../../MTCG/MTCG';
import Playbook from '../../MTCG/Playbook/PlaybookContainer';
import Attendance from '../../MTCG/Attendance/AttendanceContainer';
import Schedule from '../../MTCG/Schedule/ScheduleContainer';
import Students from '../../MTCG/Students/StudentsContainer';

var routes = (
  <Route path="/montana-code-girls" component={MTCG}>
    <Route path="playbook" component={Playbook}/>
    <Route path="attendance" component={Attendance}/>
    <Route path="students" component={Students}/>
    <Route path="schedule" component={Schedule}/>
  </Route>
);

module.exports = routes;
