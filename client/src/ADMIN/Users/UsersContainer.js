import React, { Component } from 'react';
import NavLink from '../../Components/NavLink';
import { Jumbotron, Button, Table } from 'react-bootstrap';

class UsersContainer extends Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h3>Users Tab</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Status</th>
              <th>Code Range</th>
              <th>MTCG</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doug</td>
              <td>Walter</td>
              <td>fresh5447</td>
              <td>Active</td>
              <td>Yes</td>
              <td>Yes</td>
              <td><button>Invite</button></td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Johnson</td>
              <td>bj</td>
              <td>Pending</td>
              <td>Yes</td>
              <td>No</td>
              <td><button>Invite</button></td>
            </tr>
            <tr>
              <td>Sue</td>
              <td>Bob</td>
              <td>fresh5447</td>
              <td>Active</td>
              <td>No</td>
              <td>Yes</td>
              <td><button>Invite</button></td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </div>
    )
  }
}

export default UsersContainer;
