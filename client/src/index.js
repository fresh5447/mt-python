import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import App from './App';
import vApp from './vApp';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import * as FontAwesome from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
require('./stylesheets/main.scss');

import PageNotFound from './Components/PageNotFound';

import mtcgRoutes from './Config/routes/mtcg';
import userAuth from './Config/routes/userAuth';
import adminConsole from './Config/routes/adminConsole';
import bscaStudentApp from './Config/routes/bscaStudentApp';
import xbscaStudentApp from './Config/routes/xbscaStudentApp';


if (!window.Promise) {
  window.Promise = Promise;
}

render((
  <Router history={browserHistory}>

      {/* <Route path="/v" component={vApp}>
        { xbscaStudentApp }
      </Route> */}


    <Route path="/" component={App}>



      { bscaStudentApp }

      { adminConsole }

      { mtcgRoutes }

      { userAuth }

      <Route path="*" component={PageNotFound} />

    </Route>
  </Router>
), document.getElementById('root'))
