import React, { Component } from 'react';
import GetUser from './Context/GetUser';
import Notifier from './Context/Notifier';
import DashboardContainer from './Dashboard/DashboardContainer';
import RootNavbar from './Navbar/RootNavbar';


class App extends Component {
  render() {
    return (
      <div>
        <GetUser>
          <Notifier>
            {/* <Feedback> */}
              <RootNavbar/>
                { this.props.children ? this.props.children : <DashboardContainer/> }
            {/* </Feedback> */}
          </Notifier>
        </GetUser>
      </div>
    );
  }
}

export default App;
