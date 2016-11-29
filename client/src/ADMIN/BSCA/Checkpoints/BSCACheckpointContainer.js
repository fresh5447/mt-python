import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Button, Panel } from 'react-bootstrap';

class BSCAContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      module: null
    };
    this.loadModule = this.loadModule.bind(this);
  }

  componentWillMount() {
    this.loadModule();
  }

  componentWillReceiveProps() {
    this.loadModule();
  }

  loadModule() {
    $.ajax({
      url: '/api/v2/modules/' + this.props.params.module_id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }
  render() {
    const checkpointItems = this.state.module ? this.state.module.checkpoints.map((item) => {
      return <li><NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/view/" + item._id}>{item.title}</NavLink></li>
    }) : null;
    return (
    <div>
      <Jumbotron>
        <h3>{ this.state.module ? this.state.module.title : null }</h3>
        <ul>
          { checkpointItems }
          <li><NavLink to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/post"}>New Checkpiont</NavLink></li>
        </ul>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default BSCAContainer;