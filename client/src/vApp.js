import React, { Component } from 'react';
import GetUser from './Context/GetUser';
import $ from 'jquery';
import Notifier from './Context/Notifier';
import RootNavbar from './Navbar/RootNavbar';


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: null
    }
  }
  componentWillMount(){
    this.getUser();
  }
  getUser(cb) {
    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done(data =>  this.setState({ user: data }))
  }
  render() {
    const u = this.state.user ? this.state.user : null;
    return (
      <div>
        <GetUser>
          <Notifier>
            {/* <Feedback> */}
              <RootNavbar user={u}/>
                { this.props.children  }
            {/* </Feedback> */}
          </Notifier>
        </GetUser>
      </div>
    );
  }
}

export default App;
