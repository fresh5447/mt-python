import React from 'react';
import { Route } from 'react-router';

import ADMIN from '../../ADMIN/ADMIN';
import BSCAAdminContainer from '../../ADMIN/BSCA/MainContainer';

import BSCACourseContainer from '../../ADMIN/BSCA/Courses/CoursesContainer';
import BSCAViewCourseContainer from '../../ADMIN/BSCA/Courses/View/BSCAViewContainer';
import BSCAEditCourseContainer from '../../ADMIN/BSCA/Courses/Edit/BSCAEditContainer';
import BSCAPostCourseContainer from '../../ADMIN/BSCA/Courses/Post/BSCAPostContainer';

import BSCAModulesContainer from '../../ADMIN/BSCA/Modules/ModulesContainer';
import BSCAPostModulesContainer from '../../ADMIN/BSCA/Modules/Post/BSCAPostContainer';
import BSCAViewModulesContainer from '../../ADMIN/BSCA/Modules/View/BSCAViewContainer';
import BSCAEditModulesContainer from '../../ADMIN/BSCA/Modules/Edit/BSCAEditContainer';

import BSCACheckpointContainer from '../../ADMIN/BSCA/Checkpoints/BSCACheckpointContainer';
import BSCAPostCheckpointContainer from '../../ADMIN/BSCA/Checkpoints/Post/BSCAPostContainer';
import BSCAViewCheckpointContainer from '../../ADMIN/BSCA/Checkpoints/View/BSCAViewContainer';
import BSCAEditCheckpointContainer from '../../ADMIN/BSCA/Checkpoints/Edit/BSCAEditContainer';

import BSCAResourceContainer from '../../ADMIN/BSCA/Resources/ResourcesContainer';
import BSCAViewResourceContainer from '../../ADMIN/BSCA/Resources/View/BSCAViewContainer';
import BSCAEditResourceContainer from '../../ADMIN/BSCA/Resources/Edit/BSCAEditContainer';
import BSCAPostResourceContainer from '../../ADMIN/BSCA/Resources/Post/BSCAPostContainer';

import MTCGContainer from '../../ADMIN/MTCG/MTCGContainer';
import UsersContainer from '../../ADMIN/Users/UsersContainer';
import PublisherContainer from '../../ADMIN/Publisher/PublisherContainer';


var routes = (
  <Route path="/admin-console" component={ADMIN}>

    <Route path="bsca" component={BSCAAdminContainer}>

      <Route path="courses" component={BSCACourseContainer}>
        <Route path="view/:course_id" component={BSCAViewCourseContainer}/>
        <Route path="edit/:course_id" component={BSCAEditCourseContainer}/>
        <Route path="post" component={BSCAPostCourseContainer}/>
      </Route>


      <Route path="course/:course_id/modules" component={BSCAModulesContainer}>
        <Route path="view/:module_id" component={BSCAViewModulesContainer}/>
        <Route path="edit/:module_id" component={BSCAEditModulesContainer}/>
        <Route path="post" component={BSCAPostModulesContainer}/>
      </Route>


      <Route path="course/:course_id/module/:module_id" component={BSCACheckpointContainer}>
        <Route path="view/:checkpoint_id" component={BSCAViewCheckpointContainer}/>
        <Route path="edit/:checkpoint_id" component={BSCAEditCheckpointContainer}/>
        <Route path="post" component={BSCAPostCheckpointContainer}/>
      </Route>


      <Route path="resources" component={BSCAResourceContainer}>
        <Route path="view/:resource_id" component={BSCAViewResourceContainer}/>
        <Route path="edit/:resource_id" component={BSCAEditResourceContainer}/>
        <Route path="post" component={BSCAPostResourceContainer}/>
      </Route>
    </Route>

    <Route path="mtcg" component={MTCGContainer}/>
    <Route path="users" component={UsersContainer}/>
    <Route path="publisher" component={PublisherContainer}/>

  </Route>

);

module.exports = routes;
