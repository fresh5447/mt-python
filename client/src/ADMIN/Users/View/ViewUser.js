import React, { Component } from 'react';
import $ from "jquery";
import { Jumbotron, Table } from 'react-bootstrap';

class ViewUser extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      user: null
    }
  }
  componentWillMount(){
    this.loadUser()
  }
  componentDidUpdate (prevProps) {
      let oldId = prevProps.params.user_id
      let newId = this.props.params.user_id
      if (newId !== oldId){
        this.loadUser(this.props.params.user_id)
      }
  }
  loadUser(){
    $.ajax({
      url: '/singleUser/' + this.props.params.user_id,
      method: 'GET',
      success: ((data) => {
        this.setState({ user: data })
        window.u = data;
      }),
      error: ((err)=> {
        console.log("ERROR FINDING USERS", err)
      })
    })
  }
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>View Profile</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>role</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>


            {
              this.state.user && this.state.user.local ?
              (
              <tr>
                <td>{this.state.user.local.firstName}</td>
                <td>{this.state.user.local.lastName}</td>
                <td>{this.state.user.local.email}</td>
                <td>{this.state.user.role ? this.state.user.local.role : "no role"}</td>
                <td>{this.state.user.status ? this.state.user.local.status : "no status"}</td>
                <td><button>Invite</button></td>
              </tr>
              ) : null
            }
          </tbody>
        </Table>
      </Jumbotron>
      <Jumbotron>
        <h3>User Orgs</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>BSCA</th>
              <th>MTCG</th>
              <th>C4P</th>
              <th>MT3</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.user && this.state.user.local ?
              (
              <tr>
                <td>{this.state.user.authCourses.includes("BSCA").toString()}</td>
                <td>{this.state.user.authCourses.includes("MTCG").toString()}</td>
                <td>{this.state.user.authCourses.includes("MT3").toString()}</td>
                <td>{this.state.user.authCourses.includes("C4P").toString()}</td>
              </tr>
              ) : null
            }
          </tbody>
        </Table>
      </Jumbotron>
      <Jumbotron>
        <h3>BSCA Courses</h3>
            {
              this.state.user && this.state.user.authCourses && this.state.user.authCourses.includes("BSCA").toString() ?
              (
                <ul>
                  <li>Course One: True</li>
                  <li>Course Two: False</li>
                  <li>Course Three: False</li>
                  <li>Course Four: False</li>
                </ul>
              ) : null
            }

      </Jumbotron>
    </div>
    )
  }
}

export default ViewUser;
