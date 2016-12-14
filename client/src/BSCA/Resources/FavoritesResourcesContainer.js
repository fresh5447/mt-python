import React, { Component } from 'react';
import $ from 'jquery';
import { Panel } from 'react-bootstrap';

class FavoriteResourcesContainer extends Component {
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
    const resourcePanels = this.state.resources ? this.state.resources.filter((i) => {
      return i.publish
    }).filter((item) => {
      return item.fav
    }).map((item) => {
      const foot = item.internal ? "Internal" : "External";
      // const fav = item.fav ? "FAV" : "Not Fav";
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
          {item.desc}
        </Panel>
      )
    }) : null
    return (
      <div className="show-grid playbook-flexbox">
            { resourcePanels }
      </div>
    )
  }
}


export default FavoriteResourcesContainer;
