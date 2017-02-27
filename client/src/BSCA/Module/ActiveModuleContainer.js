import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../Components/NavLink';
import { Link } from 'react-router';
import CheckBox from 'react-icons/lib/fa/check';

import LeftArrow from 'react-icons/lib/fa/arrow-left';
import RightArrow from 'react-icons/lib/fa/arrow-right';

import { Jumbotron, Button, Grid, Col, Row, ButtonGroup } from 'react-bootstrap';

var cb = {
  float: "left",
  color: "green"
}

class ActiveModuleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      module: null,
      current: null,
      next: null,
      previous: null,
      courses: null
    };
  }

  componentWillMount() {
    console.log("COMP WILL MOUNT");
    this.loadModule(this.props.params.module_id);
    console.log(this.state.current, this.state.previous, this.state.next, "THE STATE OF LINKS MANGGG");
  }

  componentWillReceiveProps() {
    console.log("COMP WILL RECEIVE PROPS");
    this.loadModule(this.props.params.module_id);
  }

  componentWillUnmount() {
    console.log("COMP WILL UNMOUNT");
    this.loadModule(this.props.params.module_id);
  }
  loadUsersCourses(){
    $.ajax({
      url: '/loadUser',
      method: 'GET',
    }).done((data) => {
      const courses = data.courses.filter(c => c.enrolled);
      this.setState({ courses: courses });
    });
  }

  getModuleMapLinks(){
    const constAllLinks = this.state.module.checkpoints.map((item, index, arr) => {
      return { linkId: item._id, arrLen: arr.length, arrInd: index}
    });
    for (var i = 0; i < constAllLinks.length; i++) {
      if(constAllLinks[i].linkId === this.props.params.checkpoint_id){
        return this.setState({current: { id: constAllLinks[i].linkId, index: constAllLinks[i].arrInd, length: constAllLinks[i].arrLen}})
      }
    }
  }

  renderCourseLinks(){
    if(this.state.courses){
      return this.state.courses.map((item) => {
        return <li><NavLink to={"/big-sky-code-academy/course/" + item._id}> { item.title } </NavLink></li>
      })
    }
  }

  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ module: data });
      this.getModuleMapLinks();
      this.loadUsersCourses();
    });
  }
  CheckpointList() {
    return (
      <div className="checkpoints-container">
        <h4>{ this.state.module ? this.state.module.title : null }</h4>
        <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="70"
          aria-valuemin="0" aria-valuemax="100" style={{width: "66%"}}>
            <span>66% Complete</span>
          </div>
        </div>
        <div>
        </div>
        <ul>
          { this.state.module ?
            this.state.module.checkpoints.map((item)=> {
              return <li><Link activeClassName="active-checkpoint" className="" to={"/big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/checkpoint/" + item._id}><CheckBox style={cb}/>{item.title}</Link></li>
            })
            : <li>Loading...</li> }
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">change course<span className="caret"></span></a>
            <ul className="dropdown-menu">
              { this.renderCourseLinks() }
            </ul>
          </li>
        </ul>
      </div>
    )
  }
  getNext(){
    if(this.state.current.index === this.state.current.length - 1) {
      return
    } else {
      const linkId = this.state.module.checkpoints[this.state.current.index + 1]._id;
      return (
        <div className="cp-nav-item btn btn-primary">
          <Link className="mini-nav-links" to={"/big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/checkpoint/" + linkId}><h6> Complete / Next </h6></Link>
          <RightArrow />
      </div>
      )
    }
  }
  getPrevious(){
    if(this.state.current.index === 0) {
      return
    } else {
      const linkId = this.state.module.checkpoints[this.state.current.index - 1]._id
      return (
        <div className="cp-nav-item btn btn-primary">
          <LeftArrow />
          <Link className="mini-nav-links" to={"/big-sky-code-academy/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/checkpoint/" + linkId}><h6> Previous </h6></Link>
        </div>
      )
    }
  }
  render() {
    return (
        <div className="container cp-flex-container">
            { this.CheckpointList() }
            <div className="active-checkpoint-container">
              <div className="cp-nav-container">
                  { this.state.current ? this.getPrevious() : null }
                  { this.state.current ? this.getNext() : null }
              </div>
              { this.props.children }
            </div>
          </div>
    )
  }
}

export default ActiveModuleContainer;
