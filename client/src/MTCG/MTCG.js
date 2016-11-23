import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import PlaybookContainer from './Playbook/PlaybookContainer';
import { browserHistory } from 'react-router'

//LOAD USER
//LOAD COURSES
// const u = {
//
// }


class MTCG extends Component {
  handleSelect(key) {
    browserHistory.push('/montana-code-girls/' + key);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Tabs defaultActiveKey={"playbook"} onSelect={this.handleSelect} id="uncontrolled-tab-example">
              <Tab eventKey={"playbook"} title="playbook">{this.props.children ? this.props.children : <PlaybookContainer />}</Tab>
              <Tab eventKey={"schedule"} title="schedule">{this.props.children}</Tab>
              <Tab eventKey={"attendance"} title="attendance">{this.props.children}</Tab>
              <Tab eventKey={"students"} title="students">{this.props.children}</Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default MTCG;
