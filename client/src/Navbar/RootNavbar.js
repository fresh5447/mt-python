import React, { Component } from 'react';
import NavLink from '../Components/NavLink';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap';

class RootNavbar extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: null
    }
  }
  componentWillMount(){
    this.context.getUser((data) => {
      if(data){
          this.setState({ user: data })
      }
    })
  }
  render() {
    return (
      <Navbar collapseOnSelect className="customNav">
           <Navbar.Header>
             <Navbar.Brand>
               <NavLink to="/">Code Range</NavLink><p></p>
               { this.state.user && this.state.user.local ? this.state.user.local.email : "NO" }
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>

             <NavDropdown  title="Quick Links" id="basic-nav-dropdown">
               <MenuItem>Code.org Intro To CS</MenuItem>
               <MenuItem>Montana Code Girls Website</MenuItem>
               <MenuItem>Big Sky Code Academy</MenuItem>
               <MenuItem>Register Student</MenuItem>
               <MenuItem>Register Volunteer</MenuItem>
             </NavDropdown>
               <NavItem><Button><NavLink to="/register">Register</NavLink></Button></NavItem>
               <NavItem><Button><NavLink to="/signin">Signin</NavLink></Button></NavItem>
               <NavItem><Button><NavLink to="/signout">Logout</NavLink></Button></NavItem>
               <NavItem><Button><NavLink to="/admin-console">Admin Console</NavLink></Button></NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
    );
  }
}
RootNavbar.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default RootNavbar;
