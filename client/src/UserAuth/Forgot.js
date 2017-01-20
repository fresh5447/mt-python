import React from 'react';
import rp from 'request-promise';
import $ from 'jquery';

class Forgot extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      email: null,
      success: false
    };

  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    const options = {
      method: 'POST',
      uri: 'http://' + window.location.host + '/forgot',
      json: true,
      body: data
    };
    rp(options)
      .then( () => {
        console.log("success in submitting user");
        this.setState({ success: true })
        this.context.sendNotification("Email has been sent");
      })
      .catch( (err) => {
        console.log("Error in submitting user", err);
      })
  }

  // submitUserToServer(e) {
  //   e.preventDefault();
  //   const data = {
  //     email: this.state.email,
  //   };
  //   $.ajax({
  //     url: '/forgot',
  //     method: 'POST',
  //     data
  //   }).done((d) => {
  //     //How to handle this error success in conjunction with forgot api route.
  //     console.log("I AM DATA", data);
  //     this.setState({ success: true })
  //     this.context.sendNotification(data.message);
  //   })
  // }

  render() {
    return (
      <div className="container">

        {
          this.state.success ? (
            <div className="user-screen-container">
              <h3>You are all set.</h3>
              <p>Go check your email</p>
            </div>
          ) : (
            <div className="user-screen-container">
              <h3>Forgot your password?</h3>
              <p>Enter your email address to receive a reset link.</p>
                <form onSubmit={this.submitUserToServer}>
                  <fieldset className="form-group">
                    <input onChange={this.handleEmailChange} required="true" type="email" className="form-control" placeholder="enter email address"/>
                  </fieldset>
                  <button type="submit" className="btn btn-primary  submit-btn">Reset Password</button>
                </form>
            </div>
          )
        }
      </div>

    );
  }
}


Forgot.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

Forgot.displayName = Forgot;
export default Forgot;
