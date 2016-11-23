import React, { Component } from 'react';
import DashboardContainer from './Dashboard/DashboardContainer';
import RootNavbar from './Navbar/RootNavbar';

const user = {
  email: "doug@kosmojo.com",
  userName: "fresh5447",
  orgs: ["mtcg, bsca"]
}

// const user = null;



//if there is no user. Render the Signup Now
//Root Navigation

class App extends Component {
  render() {
    return (
      <div>
        <RootNavbar user={user}/>
          { this.props.children ? this.props.children : <DashboardContainer user={user}/> }
      </div>
    );
  }
}

export default App;
