import React, { Component } from 'react';
import NavLink from '../Components/NavLink';
import { Jumbotron, Button, Grid, Row, Col, Tabs, Tab, Panel } from 'react-bootstrap';

class GuestDashboardView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron className="dash-jumbo">
              <h1>Code Range</h1>
              <p><NavLink to="/signin"><Button bsStyle="primary">Register</Button></NavLink><NavLink to="/signin"><Button bsStyle="primary dash-btn">Login</Button></NavLink></p>
            </Jumbotron>
            <Jumbotron>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Big Sky Code Academy">
                  <div>
                    <Panel header="Learning Platform">
                      <div className="dash-cont-left">
                        <img src="/BSCA_Logo.png" role="presentation"/>
                      </div>
                      <div className="dash-cont-right">
                        <p><strong>Courses and Resources for Big Sky Code Academy Students</strong></p>
                      </div>
                    </Panel>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Montana Code Girls">
                  <div>
                    <Panel header="Volunteer Playbook">
                      <div className="dash-cont-left">
                        <img src="/mt-code-girls.png" role="presentation"/>
                      </div>
                      <div className="dash-cont-right">
                        <p><strong>Resources for Montana Code Girl volunteers and staff.</strong></p>
                      </div>
                    </Panel>
                  </div>
                </Tab>
                <Tab eventKey={3} title="Code 4 Philanthropy" disabled>Code 4 Philanthropy</Tab>
                <Tab eventKey={3} title="Montana Teaching Teachers Tech" disabled>Montana Teaching Teachers Tech</Tab>
              </Tabs>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GuestDashboardView;
