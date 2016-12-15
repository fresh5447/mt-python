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
      const foot = item.internal ? <NavLink className="res-link" to={"/big-sky-code-academy/resources/show/" + item._id}><InternalLink/></NavLink> : <a className="res-link" href={item.link} target="_"><ExternalLink/></a>;
      // const fav = item.fav ? "FAV" : "Not Fav";
      const favBtn = (
        <button className="fav-btn" onClick={ item.fav ? this.toggleFav.bind(this, item._id, 'remove') :
        this.toggleFav.bind(this, item._id, 'post') }>
          {item.fav ? <FullHeart style={heart} /> : <EmptyHeart style={heart} /> }
        </button>

      )
      var cats = item.categories.map(c =><Label bsStyle="primary">{c.name}</Label>)
      const stuff = (
        <span>
          <span className="res-footer res-cats flex-cats">
            { cats }
          </span>
            {favBtn}
            {foot}
        </span>
      )
      return (
        <Panel className="resource-panel" header={item.title} footer={stuff}>
          {item.desc}
        </Panel>
      )
    }) : null
    return (
      <div className="resource-flexbox">
            { resourcePanels }
      </div>
    )
  }
}


export default FavoriteResourcesContainer;
