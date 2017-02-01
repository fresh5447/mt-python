import React, { Component } from 'react';
import $ from 'jquery';
import NavLink from '../../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

class ModulesContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: null
    };
    this.loadCourse = this.loadCourse.bind(this);
  }

  componentWillMount(props) {
    this.loadCourse(this.props.params.course_id);
  }

  componentWillReceiveProps() {
    this.loadCourse(this.props.params.course_id);
  }

  loadCourse(id) {
    $.ajax({
      url: '/api/v2/courses/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ course: data });
    });
  }
  render() {
    const modulesItems = this.state.course ? this.state.course.modules.map((item) => {
      return (
        <tr>
          <td><NavLink to={"/admin-console/bsca/course/" + this.props.params.course_id + "/modules/view/" + item._id}>{ item.title } </NavLink></td>
          <td><NavLink className="btn btn-success" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + item._id}>Go</NavLink></td>
          <td><NavLink className="btn btn-warning" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/modules/edit/" + item._id}>Edit</NavLink></td>
        </tr>
      )
    }) : null;
    return (
    <div>
      <Jumbotron>
        <h3>{this.state.course ? this.state.course.title : null}</h3>
        <p>Modules</p>
        <Table responsive>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { modulesItems }
          </tbody>
        </Table>
        <NavLink className="btn btn-primary" to={"/admin-console/bsca/course/" + this.props.params.course_id + "/modules/post/"}>Create Module</NavLink>
      </Jumbotron>
      { this.props.children }
    </div>
    )
  }
}

export default ModulesContainer;
