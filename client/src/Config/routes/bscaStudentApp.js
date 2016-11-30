import React from 'react';
import { Route } from 'react-router';


import BSCAMainContainer from '../../BSCA/MainContainer';
import HomeContainer from '../../BSCA/Home/HomeContainer';
import ResourcesContainer from '../../BSCA/Resources/ResourcesContainer';
import ActiveCourseContainer from '../../BSCA/Courses/ActiveCourseContainer';
import ActiveModuleContainer from '../../BSCA/Module/ActiveModuleContainer';
import ActiveCheckpointContainer from '../../BSCA/Checkpoint/ActiveCheckpointContainer';


var routes = (
  <Route path="big-sky-code-academy" component={BSCAMainContainer}>
    <Route path="home" component={HomeContainer}/>
    <Route path="resources" component={ResourcesContainer}/>
    <Route path="course/:course_id" component={ActiveCourseContainer}/>
    <Route path="course/:course_id/module/:module_id" component={ActiveModuleContainer}>
      <Route path="checkpoint/:checkpoint_id" component={ActiveCheckpointContainer}/>
    </Route>
  </Route>
);

module.exports = routes;
