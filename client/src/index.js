import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
require('./stylesheets/main.scss');

import PageNotFound from './Components/PageNotFound';

import mtcgRoutes from './Routes/routes/mtcg';
import userAuth from './Routes/routes/userAuth';
import adminConsole from './Routes/routes/adminConsole';
import bscaStudentApp from './Routes/routes/bscaStudentApp';

render((
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      { bscaStudentApp }

      { adminConsole }

      { mtcgRoutes }

      { userAuth }

      <Route path="*" component={PageNotFound} />

    </Route>
  </Router>
), document.getElementById('root'))
