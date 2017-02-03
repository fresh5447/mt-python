import React, { Component } from 'react';
import $ from "jquery";
import Tweeter from 'react-icons/lib/fa/twitter';
import Github from 'react-icons/lib/fa/github';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Blog from 'react-icons/lib/fa/bullhorn';
import Website from 'react-icons/lib/fa/user';
import Email from 'react-icons/lib/fa/envelope-o';
import Plus from 'react-icons/lib/fa/plus-square';
import { Jumbotron, Accordion, Panel } from 'react-bootstrap';

class SocialContainer extends Component {
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
    const u = this.state.users ? this.state.users.filter(u => u.role === "student").map((item)=>{
      var header = <span> <Plus /> { item.local.firstName + " " + item.local.lastName } </span>;
      return (
        <Accordion>
          <Panel header={ header } eventKey="1">
            <p> <Email /> { item.local.email }</p>
            <p> <Tweeter /> { item.twitter }</p>
            <p> <Linkedin/> { item.linkedIn }</p>
            <p> <Github/> { item.github }</p>
            <p> <Website/> { item.website }</p>
            <p> <Blog/> { item.blog }</p>
          </Panel>
        </Accordion>
      )
    }) : null
    return (
    <div>
      <Jumbotron className="admin-jumbo">
        <h3 className="my-courses">Be Social</h3>
        <p className="center-text">Like, share, retweet, endorse, and follow!</p>
        { u }
      </Jumbotron>
    </div>
    )
  }
}

export default SocialContainer;
