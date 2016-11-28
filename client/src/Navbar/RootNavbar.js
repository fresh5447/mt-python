import React, { Component } from 'react';
import NavLink from '../Components/NavLink';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap';

class RootNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
           <Navbar.Header>
             <Navbar.Brand>
               <NavLink to="/">Code Range</NavLink>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>
             <NavLink to="/admin-console">Admin Console</NavLink>
             <NavDropdown  title="Quick Links" id="basic-nav-dropdown">
               <MenuItem>Code.org Intro To CS</MenuItem>
               <MenuItem>Montana Code Girls Website</MenuItem>
               <MenuItem>Big Sky Code Academy</MenuItem>
               <MenuItem>Register Student</MenuItem>
               <MenuItem>Register Volunteer</MenuItem>
             </NavDropdown>
               <NavItem eventKey={1} href="#"><Button>{this.props.user ? this.props.user.userName : "login"}</Button></NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
    );
  }
}

export default RootNavbar;
