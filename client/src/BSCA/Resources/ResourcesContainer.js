import React, { Component } from 'react';
import { Button, Grid, Col, ButtonGroup, Nav, NavItem, Panel } from 'react-bootstrap';

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
      tabKey: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedKey) {
    return this.setState({ tabKey: selectedKey })
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
            <Nav bsStyle="pills" activeKey={this.state.tabKey} onSelect={this.handleSelect}>
              <NavItem active={  this.state.tabKey === 1 ?  true : false }  eventKey={1} title="ALL">ALL</NavItem>
              <NavItem active={  this.state.tabKey === 2 ?  true : false }  eventKey={2} title="FAVS">FAVORITE</NavItem>
              <NavItem active={  this.state.tabKey === 3 ?  true : false }   eventKey={3} title="NEW">NEW</NavItem>
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
