import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap';
import './App.css';
import logo from './mt-code-girls.png'


const panelsInstance1 = (
    <Panel className={'playbook-panel'} header={"Community Branding"} footer={"Learn More"}>
      Archives of Code.org email communications, templates for your use, and branding guidelines
    </Panel>
);

const panelsInstance2 = (
    <Panel className={'playbook-panel'} header={"Community Building"} footer={"Learn More"}>
      Explore resources and ideas for building a strong, interconnected CS community in your region
    </Panel>
);

const panelsInstance3 = (
    <Panel className={'playbook-panel'} header={"Counselor and Administrtion PD"} footer={"Learn More"}>
      Resources to help you plan and run this workshop!
    </Panel>
);

const panelsInstance4 = (
    <Panel className={'playbook-panel'} header={"Curriculum Guides"} footer={"Learn More"}>
      Links to the homepage and curriculum guide for each of Code.org’s K-12 course offerings
    </Panel>
);

const panelsInstance5 = (
    <Panel className={'playbook-panel'} header={"Facilitator Support"} footer={"Learn More"}>
    Resources for facilitators such as a workshop one-pager, example contract, and payment info Learn more
    </Panel>
);

const panelsInstance6 = (
    <Panel className={'playbook-panel'} header={"Community Branding"} footer={"Learn More"}>
      Archives of Code.org email communications, templates for your use, and branding guidelines
    </Panel>
);

const panelsInstance7 = (
    <Panel className={'playbook-panel'} header={"FAQ"} footer={"Learn More"}>
      Can't find what you're looking for? Check the FAQ.
    </Panel>
);

const panelsInstance8 = (
    <Panel className={'playbook-panel'} header={"Fundraising Resources"} footer={"Learn More"}>
      Our Fundraising Playbook provides tools and tips to get you in action today
    </Panel>
);

const panelsInstance9 = (
    <Panel className={'playbook-panel'} header={"Ordering Supplies"} footer={"Learn More"}>
      Payment Information
    </Panel>
);

const ps = [panelsInstance1, panelsInstance2, panelsInstance3, panelsInstance4, panelsInstance5, panelsInstance6, panelsInstance7, panelsInstance8, panelsInstance9]

class App extends Component {
  render() {
    return(
      <Grid>
      <img className="mt-logo" role="presentation" src={logo}/>
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
        <Row className="show-grid">
          <Col xs={12} className="playbook-flexbox">
            { ps.map(item => item )}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
