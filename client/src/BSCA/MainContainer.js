import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Home from './Home/HomeContainer';
import { browserHistory } from 'react-router'


class MainContainer extends Component {
  handleSelect(key) {
    browserHistory.push('/big-sky-code-academy/' + key);
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Tabs defaultActiveKey={"home"} onSelect={this.handleSelect} id="uncontrolled-tab-example">
              <Tab eventKey={"home"} title="Home">{this.props.children ? this.props.children : <Home />}</Tab>
              <Tab eventKey={"resources"} title="Resources">{this.props.children}</Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default MainContainer;
