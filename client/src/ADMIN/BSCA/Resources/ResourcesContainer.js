import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

class BSCAContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: null,
      categories: null
    };
    this.loadResources = this.loadResources.bind(this);
  }

  componentWillMount() {
    this.loadResources();
    this.loadCategories();
  }

  componentWillReceiveProps() {
    this.loadResources();
    this.loadCategories();
  }

  loadResources() {
    $.ajax({
      url: '/api/v2/resources',
      method: 'GET',
    }).done((data) => {
      this.setState({ resources: data });
    });
  }
  loadCategories() {
    $.ajax({
      url: '/api/v2/categories',
      method: 'GET',
    }).done((data) => {
      this.setState({ categories: data });
    });
  }
  render() {
    const resourceItems = this.state.resources ? this.state.resources.map((item) => {
      var published = item.publish ? <span className="live-course">live</span> : <span className="draft-course">draft</span>
      return (
        <div className="admin-course-panel panel panel-default">
                  <div className="panel-heading active-course-heading">
                    <h3 className="panel-title">{item.title} { published }</h3>
                  </div>
                   <div className="panel-footer">
                     <NavLink className="btn btn-success"  to={"/admin-console/bsca/resources/view/" + item._id }> { item.title } </NavLink>
                     <NavLink className="btn btn-warning" to={"/admin-console/bsca/resources/edit/" + item._id }> Edit </NavLink>
                   </div>
                </div>
      )
    }) : null;
    return (
    <div>
      { this.props.children }
      <div className="admin-jumbo admin-course-list-flex">
          { resourceItems }
          <NavLink className="admin-course-panel panel button-panel" to="/admin-console/bsca/resources/post/">Create New Resource</NavLink>
      </div>

    </div>
    )
  }
}

export default BSCAContainer;
