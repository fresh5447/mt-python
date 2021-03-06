import React, { Component } from 'react';
import ViewUser from './ViewUser';
import $ from "jquery";

class UserContainer extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      user: null
    }
    this.toggleUserCourse = this.toggleUserCourse.bind(this);
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
  toggleUserCourse(user, course, action){
    console.log(user, course, action)
    $.ajax({
      url: '/editSingleUserCourses/' + user + "/" + course + "/" + action,
      method: 'PUT',
      success: ((data) => {
        console.log(data)
        this.loadUser()
      }),
      error: ((err)=> {
        console.log("ERROR UPDATING USERS COURSES", err)
      })
    })
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
    return this.state.user ? <ViewUser toggleUserCourse={this.toggleUserCourse} user={this.state.user} /> : null
  }
}

export default UserContainer;
