import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Button, Grid, Col, ButtonGroup, Nav, NavItem } from 'react-bootstrap';

class ResourcesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabKey: 1,
      resources: null
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }
  loadResources(){
    console.log("LOADING RES CONTAINER")
    $.ajax({
      url: '/api/v2/resources/student',
      methode: 'GET'
    }).done((data) => {
        this.setState({ resources: data })
        window.r = data;
      })
  }

  componentWillMount(){
    this.loadResources();
  }

  toggleFav = (id, action) => {
    console.log("ID ACTION", id,action)
  $.ajax({
    url: `/api/v2/resources/student/favorite/${id}/${action}`,
    method: 'PUT'
  }).done((d) => {
    console.log("TRYING", d)
    this.loadResources()
  });
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
              <NavItem><NavLink to="/big-sky-code-academy/resources/all" className="resources-main-filter">All</NavLink></NavItem>
              <NavItem><NavLink to="/big-sky-code-academy/resources/favorites" className="resources-main-filter">Favorite</NavLink></NavItem>
            </Nav>
          </Col>
          <Col xs={10}>
            { this.props.children }
          </Col>
      </Grid>
    )
  }
}


export default ResourcesContainer;
