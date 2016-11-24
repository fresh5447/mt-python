import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Col, Row, ButtonGroup, DropdownButton, MenuItem, Nav, NavItem } from 'react-bootstrap';

const rezs = [
  { title: "JS",
    content: "hebalsdjfsafasdf",
    link: "www.google.com",
    categories: ["one", "two", "three", "four"]
  },
  { title: "CSS",
    content: "hebalsdjfsafasdf",
    link: "www.google.com",
    categories: ["one", "two", "three", "four"]
  },
  { title: "HTML",
    content: "hebalsdjfsafasdf",
    link: "www.google.com",
    categories: ["one", "two", "three", "four"]
  },
  { title: "jQuery",
    content: "hebalsdjfsafasdf",
    link: "www.google.com",
    categories: ["one", "two", "three", "four"]
  },
  { title: "One",
    content: "hebalsdjfsafasdf",
    link: "www.google.com",
    categories: ["one", "two", "three", "four"]
  }
]


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
        <Row>
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
        </Row>
      </Grid>
    )
  }
}

export default ResourcesContainer;
