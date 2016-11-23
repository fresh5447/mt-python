import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Tabs, Tab, Panel } from 'react-bootstrap';
import NavLink from '../Components/NavLink';
import '../App.css';

class AuthoredDashboardView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>Code Range Platform Portal</h1>
              <p>Welcome {this.props.user.userName}</p>
            </Jumbotron>
            <Jumbotron>
              <h3>Your Portals</h3>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Big Sky Code Academy">
                  <div>
                    <Panel header="Big Sky Code Academy: Learning Platform" footer={<NavLink to="/big-sky-code-academy">GO</NavLink>}>
                      Anyone can sign up for the free tier which include an introduciton to web developement module, as well as countless project pased turorials and learning resources.
                    </Panel>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Montana Code Girls">
                  <div>
                    <Panel header="Montana Code Girls: Volunteer Playbook" footer={<NavLink to="/montana-code-girls">GO</NavLink>}>
                      MTCG is a state wide after school program to teach girls how to code.
                    </Panel>
                  </div>
                </Tab>

              </Tabs>
            </Jumbotron>
            <Jumbotron>
              <h3>Other Portals</h3>
              <Tabs defaultActiveKey={3} id="uncontrolled-tab-example">
                <Tab eventKey={3} title="Code 4 Philanthropy">
                  Information here about what you need to know about Code 4 Philanthropy
                </Tab>
                <Tab eventKey={4} title="Montana Teaching Teachers Tech">
                  Information Here about what you need to know about MT3
                </Tab>
              </Tabs>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AuthoredDashboardView;
