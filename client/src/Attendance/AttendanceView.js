import React, { Component } from 'react';
import { Grid, Row, Col, Table} from 'react-bootstrap';
import '../App.css';

class AttendanceView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>10/29/16</th>
                <th>10/31/16</th>
                <th>11/03/16</th>
                <th>11/05/16</th>
                <th>11/07/16</th>
                <th>11/07/16</th>
                <th>11/08/16</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doug</td>
                <td>Walter</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AttendanceView;
