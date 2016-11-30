import React from 'react';
import { Route } from 'react-router';

import Forgot from '../../UserAuth/Forgot';
import Register from '../../UserAuth/Register';
import Signin from '../../UserAuth/Signin';
import Reset from '../../UserAuth/Reset';
import Logout from '../../UserAuth/Logout';

var routes = (
  <Route>
    <Route path="/register" component={Register} />
    <Route path="/signin" component={Signin} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/signout" component={Logout} />
    <Route path="/user/reset/:reset_token" component={Reset} />
  </Route>

);

module.exports = routes;
