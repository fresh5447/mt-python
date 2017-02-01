import React, { Component } from 'react';
import $ from 'jquery';
import { Panel } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

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
    return (
      <div>
        <Panel header={this.state.resource ? this.state.resource.title : "Loading..."}>
          { this.state.resource ?
            <ReactMarkdown source={this.state.resource.content}/>
            : "Loading..." }
        </Panel>
      </div>
    )

  }
}


export default OneResourcesContainer;
