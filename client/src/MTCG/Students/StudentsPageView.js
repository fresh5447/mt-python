import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import '../../App.css';

class StudentsPageView extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>

          <Table responsive>
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Age</th>
                <th>School</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>Jessica</td>
                  <td>Sampson</td>
                  <td>9</td>
                  <td>Super School</td>
              </tr>
              <tr>
                <td>Jessica</td>
                <td>Sampson</td>
                <td>9</td>
                <td>Super School</td>
              </tr>
              <tr>
                <td>Jessica</td>
                <td>Sampson</td>
                <td>9</td>
                <td>Super School</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default StudentsPageView;
