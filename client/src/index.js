import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


import NoMatch from './NoMatch';
import Home from './Home';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="playbook" component={Home}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
