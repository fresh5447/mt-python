import React, { Component } from 'react';
import GetUser from './Context/GetUser';
import $ from 'jquery';
import Notifier from './Context/Notifier';
import DashboardContainer from './Dashboard/DashboardContainer';
import RootNavbar from './Navbar/RootNavbar';


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: null
    }
  }
  componentWillMount(){
    this.getUser((data) => {
      if(data){
          this.setState({ user: data })
      }
    })
  }
  getUser(cb) {
    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done((data) => {
      return cb(data)
    });
  }
  render() {
    const u = this.state.user ? this.state.user : null;
    return (
      <div>
        <GetUser>
          <Notifier>
            {/* <Feedback> */}
              <RootNavbar user={u}/>
                { this.props.children ? this.props.children : <DashboardContainer user={u} /> }
            {/* </Feedback> */}
          </Notifier>
        </GetUser>
      </div>
    );
  }
}

export default App;
