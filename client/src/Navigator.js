import { React, Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

class Navigator extends Component {
  render() {
    return (
      <Navbar className="main-nav" inverse collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
            <a href="#" className="">Montana Code Girls</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav>
             <NavItem eventKey={1} href="#">playbook</NavItem>
             <NavItem eventKey={2} href="#"></NavItem>
             <NavDropdown eventKey={3} title="chapter" id="basic-nav-dropdown">
               <MenuItem eventKey={3.1}>Attendance</MenuItem>
               <MenuItem eventKey={3.2}>Students</MenuItem>
               <MenuItem eventKey={3.3}>Volunteers</MenuItem>
               <MenuItem divider />
             </NavDropdown>
           </Nav>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Missoula</NavItem>
             <NavItem eventKey={2} href="#" className="btn btn-primary user-auth-btn"><span className="user-text"> Doug Walter </span></NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default Navigator;
