import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
require('./stylesheets/main.scss');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');

// import Raven from 'raven';
// Raven.config('https://3e2bcf2bfe9f484d917ad1e2455dee72@sentry.io/140418').install()
//

import PageNotFound from './Components/PageNotFound';

import mtcgRoutes from './Routes/routes/mtcg';
import userAuth from './Routes/routes/userAuth';
import adminConsole from './Routes/routes/adminConsole';
import bscaStudentApp from './Routes/routes/bscaStudentApp';

import Sandbox from './Sandbox';

render((
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      { bscaStudentApp }

      { adminConsole }

      { mtcgRoutes }

      { userAuth }

      <Route path="/play" component={Sandbox}/>

      <Route path="*" component={PageNotFound} />

    </Route>
  </Router>
), document.getElementById('root'))
