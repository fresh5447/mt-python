import React, { Component } from 'react';
import NavLink from '../Components/NavLink';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap';

class NavNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#">MTCG Playbook</a>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav>
               <NavItem><NavLink to="/landing-page">Home</NavLink></NavItem>
               <NavItem><NavLink to="/playbook">Playbook</NavLink></NavItem>
               <NavDropdown  title="My Chapter" id="basic-nav-dropdown">
                 <MenuItem ><NavLink to="/attendance">Attendance</NavLink></MenuItem>
                 <MenuItem ><NavLink to="/schedule">Schedule</NavLink></MenuItem>
                 <MenuItem ><NavLink to="/students">Roster</NavLink></MenuItem>
                 <MenuItem>Volunteers</MenuItem>
               </NavDropdown>
             </Nav>
             <Nav pullRight>
             <NavDropdown  title="Quick Links" id="basic-nav-dropdown">
               <MenuItem>Code.org Intro To CS</MenuItem>
               <MenuItem>Montana Code Girls Website</MenuItem>
               <MenuItem>Big Sky Code Academy</MenuItem>
               <MenuItem>Register Student</MenuItem>
               <MenuItem>Register Volunteer</MenuItem>
             </NavDropdown>
               <NavItem eventKey={1} href="#"><Button>Login</Button></NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
    );
  }
}

export default NavNav;
