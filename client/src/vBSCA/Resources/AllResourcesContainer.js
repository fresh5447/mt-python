import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import FullHeart from 'react-icons/lib/fa/heart';
import EmptyHeart from 'react-icons/lib/fa/heart-o';
import ExternalLink from 'react-icons/lib/fa/external-link';
import InternalLink from 'react-icons/lib/fa/arrow-right';
import { Panel, Label } from 'react-bootstrap';

const heart = {
  color: 'red'
}


class AllResourcesContainer extends Component {
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
    const resourcePanels = this.state.resources ? this.state.resources.filter((it) => {
      return it.publish
    }).map((item) => {
      const foot = item.internal ? <NavLink to={"/big-sky-code-academy/resources/show/" + item._id}><InternalLink/></NavLink> : <a href={item.link} target="_"><ExternalLink/></a>;

      // const fav = item.fav ? "FAV" : "Not Fav";
      const favBtn = (
        <button className="fav-btn" onClick={ item.fav ? this.toggleFav.bind(this, item._id, 'remove') :
        this.toggleFav.bind(this, item._id, 'post') }>
          {item.fav ? <FullHeart style={heart} /> : <EmptyHeart style={heart} /> }
        </button>
      )
      var cats = item.categories.map(c => <li><Label bsStyle="primary">{c.name}</Label></li>)
      const stuff = (
        <div>
          <ul className="res-footer res-cats">
            { cats }
          </ul>
          <ul className="res-footer res-links">
            <li>{favBtn}</li>
            <li>{foot}</li>
          </ul>
        </div>

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


export default AllResourcesContainer;
