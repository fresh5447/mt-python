import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Button, Grid, Col, ButtonGroup, Nav, NavItem } from 'react-bootstrap';


class ResourcesContainer extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      categories: null,
    };
  }

  loadCategories(){
    $.ajax({
      url: '/api/v2/categories',
      methode: 'GET'
    }).done((data) => {
        this.setState({ categories: data })
        window.r = data;
      })
  }

  componentWillMount(){
    this.loadCategories();
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
            <Nav bsStyle="pills">
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

ResourcesContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};

export default ResourcesContainer;
