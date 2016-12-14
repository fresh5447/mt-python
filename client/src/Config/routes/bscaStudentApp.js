import React from 'react';
import { Route, IndexRoute } from 'react-router';


import BSCAMainContainer from '../../BSCA/MainContainer';
import HomeContainer from '../../BSCA/Home/HomeContainer';
import ResourcesContainer from '../../BSCA/Resources/ResourcesContainer';
import ActiveCourseContainer from '../../BSCA/Courses/ActiveCourseContainer';
import ActiveModuleContainer from '../../BSCA/Module/ActiveModuleContainer';
import ActiveCheckpointContainer from '../../BSCA/Checkpoint/ActiveCheckpointContainer';

import AllResourcesContainer from '../../BSCA/Resources/AllResourcesContainer';
import FavoritesResourcesContainer from '../../BSCA/Resources/FavoritesResourcesContainer';
import CategoriesResourcesContainer from '../../BSCA/Resources/CategoriesResourcesContainer';
import OneResourcesContainer from '../../BSCA/Resources/OneResourcesContainer';



var routes = (
  <Route path="big-sky-code-academy" component={BSCAMainContainer}>
    <Route path="home" component={HomeContainer}/>
    <Route path="resources" component={ResourcesContainer}>
      <Route path="all" component={AllResourcesContainer}/>
      <Route path="favorites" component={FavoritesResourcesContainer}/>
      <Route path="categories/:category" component={CategoriesResourcesContainer}/>
      <Route path="show/:resource_id" component={OneResourcesContainer}/>
      <IndexRoute component={AllResourcesContainer}/>
    </Route>
    <Route path="course/:course_id" component={ActiveCourseContainer}/>
    <Route path="course/:course_id/module/:module_id" component={ActiveModuleContainer}>
      <Route path="checkpoint/:checkpoint_id" component={ActiveCheckpointContainer}/>
    </Route>
    <IndexRoute component={HomeContainer}/>
  </Route>
);

module.exports = routes;
