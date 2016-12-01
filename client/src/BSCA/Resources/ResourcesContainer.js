import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Grid, Col, ButtonGroup, Nav, NavItem, Panel } from 'react-bootstrap';

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
    const resourcePanels = this.state.resources ? this.state.resources.map((item) => {
      const foot = item.internal ? "Internal" : "External";
      const fav = item.fav ? "FAV" : "Not Fav";
      const favBtn = (
        <button onClick={ item.fav ? this.toggleFav.bind(this, item._id, 'remove') :
        this.toggleFav.bind(this, item._id, 'post') }>{item.fav.toString()}</button>

      )
      const stuff = (
        <ul>
          <li>{foot}</li>
          <li>{favBtn}</li>
        </ul>
      )
      return (
        <Panel className="" header={item.title} footer={stuff}>
          {item.content}
        </Panel>
      )
    }) : null
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
