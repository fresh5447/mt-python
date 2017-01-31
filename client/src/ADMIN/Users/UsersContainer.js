import React, { Component } from 'react';
import $ from "jquery";
import NavLink from '../../Components/NavLink';
import { Jumbotron, Table } from 'react-bootstrap';

class UsersContainer extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      users: null
    }
  }
  componentWillMount(){
    this.loadUsers()
  }
  loadUsers(){
    $.ajax({
      url: '/getUsers',
      method: 'GET',
      success: ((data) => {
        this.setState({ users: data })
      }),
      error: ((err)=> {
        console.log("ERROR FINDING USERS", err)
      })
    })
  }
  render() {
    const u = this.state.users ? this.state.users.map((item)=>{
      return (
        <tr>
          <td>{item.local.firstName}</td>
          <td>{item.local.lastName}</td>
          <td>{item.local.email}</td>
          <td>{item.role ? item.role : "no role"}</td>
          <td><NavLink className="btn btn-primary" to={"/admin-console/users/view/" + item._id}>View</NavLink></td>
        </tr>
      )
    }) : null
    return (
    <div>
      <Jumbotron className="admin-jumbo">
        <h3>system users</h3>
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
            { u }
          </tbody>
        </Table>
        <NavLink to={"/admin-console/users/post"} className="btn btn-primary">New User</NavLink>

      </Jumbotron>
      <Jumbotron>
        { this.props.children ? this.props.children : null }
      </Jumbotron>
    </div>
    )
  }
}

export default UsersContainer;
