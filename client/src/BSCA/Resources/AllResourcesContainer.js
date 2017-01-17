import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
import FavBtn from './FavBtn';
import FooterLink from './FooterLink';
import { Panel, Label } from 'react-bootstrap';

class AllResourcesContainer extends Component {
  constructor(props, context){
    super(props, context);
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

      // const foot = item.internal ? <NavLink className="res-link" to={"/big-sky-code-academy/resources/show/" + item._id}><InternalLink/></NavLink> : <a className="res-link" href={item.link} target="_"><ExternalLink/></a>;

      // const favBtn = <FavBtn fav={item.fav} id={item._id} toggleFav={this.toggleFav}/>;

      var cats = item.categories.map(c => <Label bsStyle="primary">{c.name}</Label>)

      const stuff = (
        <span>
          <span className="res-footer res-cats flex-cats">
            { cats }
          </span>
          <FavBtn fav={item.fav} id={item._id} toggleFav={this.toggleFav}/>
          <FooterLink internal={item.internal} id={item._id} link={item.link}/>
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
        <h1>All Resources</h1>
            { resourcePanels }
      </div>
    )
  }
}

AllResourcesContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
};
export default AllResourcesContainer;
