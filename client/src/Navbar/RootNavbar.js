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
  getNav() {
    if(this.state.user && this.state.user.local && this.state.user.role === "student"){
      return (
        <Nav pullRight>
           {/* <NavDropdown  title="Quick Links" id="basic-nav-dropdown">
             <MenuItem>Code.org Intro To CS</MenuItem>
             <MenuItem>Montana Code Girls Website</MenuItem>
             <MenuItem>Big Sky Code Academy</MenuItem>
             <MenuItem>Register Student</MenuItem>
             <MenuItem>Register Volunteer</MenuItem>
           </NavDropdown> */}
             <NavItem><Button><NavLink to="/big-sky-code-academy">Code Range</NavLink></Button></NavItem>
           </Nav>
      )
    } else if(this.state.user && this.state.user.local && this.state.user.role === "admin"){
    return (
      <Nav pullRight>
           <NavItem><Button><NavLink to="/admin-console">Adminland</NavLink></Button></NavItem>
           <NavItem><Button><NavLink to="/big-sky-code-academy">BSCA</NavLink></Button></NavItem>
           <NavItem><Button><NavLink to="/montana-code-girls">MTCG</NavLink></Button></NavItem>
      </Nav>
    )
  } else {
    return (
      <Nav pullRight>
           <NavItem><Button><NavLink to="/register">Register</NavLink></Button></NavItem>
           <NavItem><Button><NavLink to="/signin">Signin</NavLink></Button></NavItem>
      </Nav>
    )
  }
  }
  render() {
    return (
      <Navbar collapseOnSelect className="customNav">
           <Navbar.Header>
             <Navbar.Brand>
               <NavLink to="/">Code Range</NavLink><p></p>
               { this.props.user && this.props.user.local ? this.props.user.local.email : null }
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             { this.getNav() }
           </Navbar.Collapse>
         </Navbar>
    );
  }
}
RootNavbar.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default RootNavbar;
