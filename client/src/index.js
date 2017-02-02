import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
require('./stylesheets/main.scss');

import PageNotFound from './Components/PageNotFound';

import mtcgRoutes from './Config/routes/mtcg';
import userAuth from './Config/routes/userAuth';
import adminConsole from './Config/routes/adminConsole';
import bscaStudentApp from './Config/routes/bscaStudentApp';

render((
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      { bscaStudentApp }

      { adminConsole }

      { mtcgRoutes }

      {/* <Route path="*" component={PageNotFound} /> */}

      { userAuth }



    </Route>
  </Router>
), document.getElementById('root'))
