import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem, Nav, NavItem, Panel } from 'react-bootstrap';

const rezs = [
  { title: "Intro to JS",
    content: "this is a bunch of lorem ipsum yada yada yada yada yada yada yada",
    link: "www.google.com",
    categories: ["javascript"],
    favorite: true,
    link: "www.google.com"
  },
  { title: "intro to CSS",
  content: "this is a bunch of lorem ipsum yada yada yada yada yada yada yada",
    link: "www.google.com",
    categories: ["css"],
    favorite: false,
    link: "www.google.com"
  },
  { title: "intro to HTML",
  content: "this is a bunch of lorem ipsum yada yada yada yada yada yada yada",
    link: "www.google.com",
    categories: ["html"],
    favorite: true,
    link: "www.google.com"
  },
  { title: "intro to jQuery",
  content: "this is a bunch of lorem ipsum yada yada yada yada yada yada yada",
    link: "www.google.com",
    categories: ["javascript", "jquery"],
    favorite: false,
    link: "www.google.com"
  },
  { title: "Frontend Stuff",
  content: "this is a bunch of lorem ipsum yada yada yada yada yada yada yada",
    link: "www.google.com",
    categories: ["CSS", "HTML"],
    favorite: true,
    link: "www.google.com"
  }
]

const resourcePanels = rezs.map((item) => {
  return (
    <Panel className="" header={item.title} footer={item.link}>
      {item.content}
      <p>{ item.favorite.toString() }</p>
    </Panel>
  )
})




class ResourcesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {
    return this.setState({ key: selectedKey })
  }
  render() {
    return (
      <Grid>
          <Col xs={2}>
            <p><strong>categories</strong></p>
            <ButtonGroup vertical>
              <Button>JavaScript</Button>
              <Button>CSS</Button>
              <Button>HTML</Button>
              <Button>Node</Button>
              <Button>React</Button>
            </ButtonGroup>
          </Col>
          <Col xs={10}>
            <Nav bsStyle="pills" activeKey={this.state.key} onSelect={this.handleSelect}>
              <NavItem active={  this.state.key === 1 ?  true : false }  eventKey={1} title="ALL">ALL</NavItem>
              <NavItem active={  this.state.key === 2 ?  true : false }  eventKey={2} title="FAVS">FAVORITE</NavItem>
              <NavItem active={  this.state.key === 3 ?  true : false }   eventKey={3} title="NEW">NEW</NavItem>
            </Nav>
          </Col>
          <Col xs={10} className="show-grid playbook-flexbox">
            { resourcePanels }
          </Col>
      </Grid>
    )
  }
}


export default ResourcesContainer;
