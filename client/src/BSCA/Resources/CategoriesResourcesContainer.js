import React, { Component } from 'react';
import $ from 'jquery';
import ResourceCard from './ResourceCard';

class CategoriesResourcesContainer extends Component {
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
    const resourcePanels = this.state.resources && this.state.resources.length > 0 ? this.state.resources.filter((i) => {
      return i.publish
    }).filter((obj) => {
        for (var i = 0, length = obj.categories.length; i < length; i++) {
          if (obj.categories[i].name === this.props.params.category) {
            return true;
          }
        }
        return false;
      }).map((item) => {

        return <ResourceCard title={item.title} fav={item.fav} id={item._id}  toggleFav={this.toggleFav} internal={item.internal} link={item.link} cats={item.categories} desc={item.desc}/>
        }) : <div>Loading...</div>

    return (
      <div className="resource-flexbox">
        { resourcePanels }
      </div>
    )
  }
}


export default CategoriesResourcesContainer;
