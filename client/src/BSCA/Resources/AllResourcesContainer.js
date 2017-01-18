import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import ResourceCard from './ResourceCard';

class AllResourcesContainer extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      tabKey: 1,
      resources: null,
      loadingFav: false
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
    this.context.getUser((data) => {
      console.log(data, "USER DATAAAAA")
      if (data.user === 'no user') {
        alert('you must be signed in to view this');
        return browserHistory.push('/login');
      } else {
        this.loadResources();
      }
    });
  }

  toggleFav = (id, action) => {
    this.setState({ loadingFav: true })
    $.ajax({
      url: `/api/v2/resources/student/favorite/${id}/${action}`,
      method: 'PUT'
    }).done((d) => {
      this.loadResources()
      this.setState({ loadingFav: false })
    });
  }

  handleSelect(selectedKey) {
    return this.setState({ tabKey: selectedKey })
  }
  render() {
    const resourcePanels = this.state.resources ? this.state.resources.filter((i) => {
      return i.publish
    }).map((item) => {
      return <ResourceCard loadingFav={ this.state.loadingFav } fav={item.fav} id={item._id}  toggleFav={this.toggleFav} internal={item.internal} link={item.link} cats={item.categories} desc={item.desc}/>
    }) : <div>Loading...</div>
    return (
      <div className="resource-flexbox">
        { resourcePanels }
      </div>
    )
  }
}

AllResourcesContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default AllResourcesContainer;
