import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Button, Panel, Table } from 'react-bootstrap';

class BSCAContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: null
    };
    this.loadResources = this.loadResources.bind(this);
  }

  componentWillMount() {
    this.loadResources();
  }

  componentWillReceiveProps() {
    this.loadResources();
  }

  loadResources() {
    $.ajax({
      url: '/api/v2/resources',
      method: 'GET',
    }).done((data) => {
      this.setState({ resources: data });
    });
  }
  render() {
    const resourceItems = this.state.resources ? this.state.resources.map((item) => {
      return (
        <tr>
          <td><NavLink to={"/admin-console/bsca/resources/view/" + item._id }> { item.title } </NavLink></td>
          <td><NavLink to={"/admin-console/bsca/resources/edit/" + item._id }> Edit </NavLink></td>
        </tr>
      )
    }) : null;
    return (
    <div>
      <Jumbotron>
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
