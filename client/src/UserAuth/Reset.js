import React from 'react';
import $ from 'jquery';

class Reset extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.submitUserToServer = this.submitUserToServer.bind(this);

    this.state = {
      password: null,
      confirm: null,
      success: false,
    };

  }

  handlePasswordChange = (e) => this.setState({ password: e.target.value });
  handleConfirmChange = (e) => this.setState({ confirm: e.target.value });

  submitUserToServer(e) {
    e.preventDefault();
    const User = {
      password: this.state.password,
      confirm: this.state.confirm,
    };
    $.ajax({
      url: '/reset/' + this.props.params.reset_token,
      data: User,
      method: 'POST',
      success: ((data) => {
        this.setState({ success: true })
        this.context.sendNotification("Your password has been reset.");
      }),
      error: ((err) => {
        this.context.sendNotification(err);
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="user-screen-container">
          {
            this.state.success ? (
              <h1>Your password has successfully been reset</h1>
            ) : (
              <div>
              <h1>Reset Password</h1>
                <form onSubmit={this.submitUserToServer}>
                  <fieldset className="form-group">
                    <label>new password</label>
                    <input onChange={this.handlePasswordChange} type="password" className="form-control" placeholder="password"/>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>confirm</label>
                    <input onChange={this.handleConfirmChange} type="password" className="form-control" placeholder="re-enter"/>
                  </fieldset>
                  <button type="submit" className="btn btn-primary  submit-btn">Update Password</button>
                </form>
              </div>
            )
          }
        </div>
      </div>

    );
  }
}


Reset.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired,
};

Reset.displayName = Reset;
export default Reset;
