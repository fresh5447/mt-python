import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Col, Row, Nav, NavItem } from 'react-bootstrap';

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
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={2}>
            <Nav bsStyle="pills" activeKey={"one"}>
              <NavItem eventKey={"one"} title="one">NavItem 1 content</NavItem>
              <NavItem eventKey={"two"} title="two">NavItem 2 content</NavItem>
              <NavItem eventKey={"three"} title="three">NavItem 3 content</NavItem>
            </Nav>
          </Col>
          <Col xs={10}>
              Layout Jumblies
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ResourcesContainer;
