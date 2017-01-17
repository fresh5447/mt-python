import React, { Component } from 'react';
import NavLink from '../Components/NavLink';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

class RootNavbar extends Component {
  constructor(props, context){
    super(props, context);
  }
  getNav() {
    if(this.props.user && this.props.user.local && this.props.user.role === "student"){
      return (
        <Nav pullRight>
             <NavItem><NavLink to="/big-sky-code-academy">Code Range</NavLink></NavItem>
           </Nav>
      )
    } else if(this.props.user && this.props.user.local && this.props.user.role === "admin"){
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
           <NavItem><NavLink to="/register">Register</NavLink></NavItem>
           <NavItem><NavLink to="/signin">Signin</NavLink></NavItem>
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


export default RootNavbar;
