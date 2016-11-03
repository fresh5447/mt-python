import React, { Component } from 'react';
import LandingPage from './LandingPage/LandingPageContainer';
import NavbarComponent from './Navbar/NavbarComponent';


class App extends Component {
  render() {
    return (
      <div>
      <NavbarComponent/>
          { this.props.children ? this.props.children : <LandingPage /> }
      </div>
    );
  }
}

export default App;
