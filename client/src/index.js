import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import LandingPage from './LandingPage/LandingPageContainer.js';
import Playbook from './Playbook/PlaybookContainer.js';
import Attendance from './Attendance/AttendanceContainer.js';
import Schedule from './Schedule/ScheduleContainer.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/playbook" component={Playbook}/>
      <Route path="/attendance" component={Attendance}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/landing-page" component={LandingPage}/>
    </Route>
  </Router>
), document.getElementById('root'))
