import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

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
      var published = item.publish ? <span className="live-course">live</span> : <span className="draft-course">draft</span>
      return (
        <div className="admin-course-panel panel panel-default">
                  <div className="panel-heading active-course-heading">
                    <h3 className="panel-title">{item.title} { published }</h3>
                  </div>
                   <div className="panel-footer">
                     <NavLink className="btn btn-success" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/view/" + item._id}>View</NavLink>
                     <NavLink className="btn btn-warning" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/edit/" + item._id}>Edit</NavLink>
                   </div>
                </div>
      )    }) : null;
    return (
    <div>
      { this.props.children }
      <h3>{ this.state.module ? this.state.module.title : null }</h3>
      <div className="admin-jumbo admin-course-list-flex">
          { checkpointItems }
          <NavLink className="admin-course-panel panel button-panel"  to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/post"}>Create Checkpiont</NavLink>
      </div>
    </div>

    )
  }
}

export default BSCAContainer;
