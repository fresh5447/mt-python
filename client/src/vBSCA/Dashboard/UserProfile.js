import React from 'react';
import { Panel } from 'react-bootstrap'

const UserProfile = (props) =>
  <Panel title={props.user && props.user.local ? props.user.local.email : null} footer={"Complete"}>
    <h3>More User Stuff</h3>
  </Panel>



export default UserProfile;
