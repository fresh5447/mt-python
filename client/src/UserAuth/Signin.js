import React from 'react';
import { browserHistory } from 'react-router';
import NavLink from '../Components/NavLink';
import $ from 'jquery';

class UserSignin extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      email: null,
      password: null
    };
  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/login',
      data: User,
      method: 'POST',
      success: ((data) => {
        console.log("Sucess", data)
        this.context.sendNotification(data.message);
        browserHistory.push('/');
      }),
      error: ((err) => {
        console.log("ERROR", err)
        this.context.sendNotification(err.responseText);
      })
    })
  }

  render() {
    return (
      <div className="user-screen-container">
        <div className="container">
          <div className="row">
            <h3>CodeRange</h3>
            <NavLink className="btn btn-primary  register-btn pull-right" to="/signup">register</NavLink>
          </div>
          <div className="col-xs-6 col-xs-offset-3">
            <h1>login</h1>
            <form onSubmit={this.submitUserToServer}>
              <fieldset className="form-group">
                <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="email"/>
              </fieldset>
              <fieldset className="form-group">
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary btn-lg btn-block register-btn">Submit</button>
              <NavLink className="nav-link" to="/forgot"><p>forgot password?</p></NavLink>
            </form>
          </div>

        </div>
      </div>

    );
  }
}

UserSignin.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default UserSignin;
