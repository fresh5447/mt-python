import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Home from './Home/HomeContainer.js';
import Playbook from './Playbook/PlaybookContainer.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/playbook" component={Playbook}/>
      <Route path="/home" component={Home}/>
    </Route>
  </Router>
), document.getElementById('root'))
