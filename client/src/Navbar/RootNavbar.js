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
             <NavItem><NavLink className="btn btn-default nav-btn" to="/big-sky-code-academy">BSCA</NavLink></NavItem>
             <NavItem><a className="btn btn-default nav-btn" href="/logout">logout</a></NavItem>
           </Nav>
      )
    } else if(this.props.user && this.props.user.local && this.props.user.role === "admin"){
    return (
      <Nav pullRight>
           <NavItem><NavLink className="btn btn-default nav-btn" to="/admin-console">Adminland</NavLink></NavItem>
           <NavItem><NavLink className="btn btn-default nav-btn" to="/big-sky-code-academy">BSCA</NavLink></NavItem>
           <NavItem><NavLink className="btn btn-default nav-btn" to="/montana-code-girls">MTCG</NavLink></NavItem>
           <NavItem><a className="btn btn-default nav-btn" href="/logout">logout</a></NavItem>
      </Nav>
    )
  } else {
    return (
      <Nav pullRight>
           <NavItem><NavLink className="btn btn-default nav-btn" to="/register">Register</NavLink></NavItem>
           <NavItem><NavLink className="btn btn-default nav-btn"to="/signin">Signin</NavLink></NavItem>
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
