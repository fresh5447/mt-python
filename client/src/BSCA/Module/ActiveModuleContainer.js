import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Link } from 'react-router';
import LeftArrow from 'react-icons/lib/fa/arrow-left';

import { Jumbotron, Button, Grid, Col, Row, ButtonGroup } from 'react-bootstrap';

class ActiveModuleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null
    };
  }

  componentWillMount() {
    console.log("COMP WILL MOUNT");
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    console.log("COMP WILL RECEIVE PROPS");
    this.loadModule(this.props.params.module_id);
  }

  componentWillUnmount() {
    console.log("COMP WILL UNMOUNT");
    this.loadModule(this.props.params.module_id);
  }

  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-10 col-xs-offset-1">
          <div className="module-header">
            <h3 className="my-courses">{this.state.module ? this.state.module.title : null}</h3>
            <NavLink to={"/big-sky-code-academy/course/" + this.props.params.course_id}><LeftArrow className="left-arrow"/></NavLink>
          </div>
        </div>
        <div className="col-xs-2">
          <ButtonGroup vertical>
            <p className="btn btn-default"><strong>checkpoints</strong></p>
            { this.state.module ?
              this.state.module.checkpoints.map((item)=> {
                return <Link activeClassName="active-checkpoint" className="btn btn-default" to={"/big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/checkpoint/" + item._id}>{item.title}</Link>
              })
              : <Button>Loading...</Button> }
          </ButtonGroup>
        </div>
        <div className="col-xs-10">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default ActiveModuleContainer;
