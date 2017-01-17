import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Button, Grid, Col, ButtonGroup, Nav, NavItem } from 'react-bootstrap';

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

class ResourcesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabKey: 1,
      resources: null,
      categories: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  loadResources(){
    console.log("LOADING RES CONTAINER")
    $.ajax({
      url: '/api/v2/resources/student',
      method: 'GET'
    }).done((data) => {
        this.setState({ resources: data })
      })
  }

  loadCategories(){
    console.log("LOADING RES CONTAINER")
    $.ajax({
      url: '/api/v2/categories',
      methode: 'GET'
    }).done((data) => {
        this.setState({ categories: data })
        window.r = data;
      })
  }

  componentWillMount(){
    this.loadResources();
    this.loadCategories();
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
            <ButtonGroup vertical>
              <p className="btn btn-default"><strong>categories</strong></p>
              {
                this.state.categories ? (
                  this.state.categories.map((item) => {
                    return <Link activeClassName="active-category" className={"btn btn-default"} to={"/big-sky-code-academy/resources/categories/" + item.name }>{ item.name }</Link>
                  })
                ) : <Button>Loading...</Button>
              }
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
