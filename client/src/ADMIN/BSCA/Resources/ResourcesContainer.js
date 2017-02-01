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
      var published = item.publish ? <span className="live-course"></span> : <span className="draft-course">draft</span>
      return (
        <tr>
          <td><NavLink to={"/admin-console/bsca/resources/view/" + item._id }> { item.title } { published } </NavLink></td>
          <td><NavLink className="btn btn-warning" to={"/admin-console/bsca/resources/edit/" + item._id }> Edit </NavLink></td>
        </tr>
      )
    }) : null;
    return (
    <div>
      <Jumbotron className="admin-jumbo">
        <p>Resources</p>
          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { resourceItems }
            </tbody>
          </Table>
          <NavLink to="/admin-console/bsca/resources/post/">Create New Resource</NavLink>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default BSCAContainer;
