import React, { Component } from 'react';
import EditUserForm from './EditUserForm';
import $ from "jquery";

class EditUserData extends Component {
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
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      courses: this.state.courses
    };
    $.ajax({
      url: `/api/v2/courses/${this.props.params.course_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("Course Edit Success");
    });
  }
  render() {
    return this.state.user ? <EditUserForm user={this.state.user} /> : null
  }
}

export default EditUserData;
