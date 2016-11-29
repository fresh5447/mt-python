import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



import BSCA from './BSCA/BSCA';
import HomeContainer from './BSCA/Home/HomeContainer';
import ResourcesContainer from './BSCA/Resources/ResourcesContainer';
import ActiveCourseContainer from './BSCA/Courses/ActiveCourseContainer';

import MTCG from './MTCG/MTCG';
import Playbook from './MTCG/Playbook/PlaybookContainer';
import Attendance from './MTCG/Attendance/AttendanceContainer';
import Schedule from './MTCG/Schedule/ScheduleContainer';
import Students from './MTCG/Students/StudentsContainer';

import ADMIN from './ADMIN/ADMIN';
import BSCACourseContainer from './ADMIN/BSCA/Courses/CoursesContainer';
import BSCAViewCourseContainer from './ADMIN/BSCA/Courses/View/BSCAViewContainer';
import BSCAEditCourseContainer from './ADMIN/BSCA/Courses/Edit/BSCAEditContainer';
import BSCAPostCourseContainer from './ADMIN/BSCA/Courses/Post/BSCAPostContainer';

import BSCAModulesContainer from './ADMIN/BSCA/Modules/ModulesContainer';
import BSCAPostModulesContainer from './ADMIN/BSCA/Modules/Post/BSCAPostContainer';
import BSCAViewModulesContainer from './ADMIN/BSCA/Modules/View/BSCAViewContainer';

import MTCGContainer from './ADMIN/MTCG/MTCGContainer';
import UsersContainer from './ADMIN/Users/UsersContainer';
import PublisherContainer from './ADMIN/Publisher/PublisherContainer';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/big-sky-code-academy" component={BSCA}>
        <Route path="home" component={HomeContainer}/>
        <Route path="resources" component={ResourcesContainer}/>
        <Route path="course/:course_title" component={ActiveCourseContainer}/>
      </Route>

      <Route path="/admin-console" component={ADMIN}>
        <Route path="bsca/courses" component={BSCACourseContainer}>
          <Route path="view/:course_id" component={BSCAViewCourseContainer}/>
          <Route path="edit/:course_id" component={BSCAEditCourseContainer}/>
          <Route path="post" component={BSCAPostCourseContainer}/>
        </Route>

        <Route path="bsca/course/:course_id/modules" component={BSCAModulesContainer}>
          <Route path="view/:module_id" component={BSCAViewModulesContainer}/>
          {/* <Route path="edit/:module_id" component={BSCAEditModulesContainer}/> */}
          <Route path="post" component={BSCAPostModulesContainer}/>
        </Route>

        <Route path="mtcg" component={MTCGContainer}/>
        <Route path="users" component={UsersContainer}/>
        <Route path="publisher" component={PublisherContainer}/>
      </Route>

      <Route path="/montana-code-girls" component={MTCG}>
        <Route path="playbook" component={Playbook}/>
        <Route path="attendance" component={Attendance}/>
        <Route path="students" component={Students}/>
        <Route path="schedule" component={Schedule}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('root'))
