import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import NavLink from '../Components/NavLink';
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
              <NavLink to="/v/bsca/dashboard">DASHBOARD</NavLink>
              <NavLink to="/v/bsca/resources">RESOURCES</NavLink>
              { this.props.children }
          </Col>

        </Row>
      </Grid>

    )
  }
}

export default MainContainer;
