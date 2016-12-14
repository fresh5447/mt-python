import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import FullHeart from 'react-icons/lib/fa/heart';
import EmptyHeart from 'react-icons/lib/fa/heart-o';
import ExternalLink from 'react-icons/lib/fa/external-link';
import InternalLink from 'react-icons/lib/fa/arrow-right';
import { Panel } from 'react-bootstrap';

const heart = {
  color: 'red'
}


class OneResourcesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabKey: 1,
      resource: null
    };

    this.toggleFav = this.toggleFav.bind(this);
  }
  loadResource(){
    console.log("LOADING RES CONTAINER")
    $.ajax({
      url: '/api/v2/resources/student/byid/' + this.props.params.resource_id,
      methode: 'GET'
    }).done((data) => {
        this.setState({ resource: data })
        window.r = data;
      })
  }

  componentWillMount(){
    this.loadResource();
  }

  toggleFav = (id, action) => {
    console.log("ID ACTION", id,action)
  $.ajax({
    url: `/api/v2/resources/student/favorite/${id}/${action}`,
    method: 'PUT'
  }).done((d) => {
    console.log("TRYING", d)
    this.loadResource()
  });
}
  render() {
    // const favBtn = (
    //     this.state.resource ? (
    //       <button className="fav-btn" onClick={ this.state.resource.fav ? this.toggleFav.bind(this, this.state.resource._id, 'remove') :
    //       this.toggleFav.bind(this, this.state.resource._id, 'post') }>
    //         {this.state.resource.fav ? <FullHeart style={heart} /> : <EmptyHeart style={heart} /> }
    //       </button>
    //     ) : null
    // )
    return (
      <div>
        <Panel header={this.state.resource ? this.state.resource.title : "Loading..."}>
          { this.state.resource ? this.state.resource.content : "Loading..." }
        </Panel>
      </div>
    )

  }
}


export default OneResourcesContainer;
