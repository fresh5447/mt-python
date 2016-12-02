import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col, Tabs, Tab, Panel } from 'react-bootstrap';

class GuestDashboardView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>Code Range Platform Portal</h1>
              <p>Learn more about gainging access to these platforms.</p>
              <p><Button bsStyle="primary">Learn more</Button>  <Button bsStyle="primary">Login</Button></p>
            </Jumbotron>
            <Jumbotron>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Big Sky Code Academy">
                  <div>
                    <Panel header="Big Sky Code Academy: Learning Platform" footer="learn more | create free acount">
                      Anyone can sign up for the free tier which include an introduciton to web developement module, as well as countless project pased turorials and learning resources.
                    </Panel>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Montana Code Girls">
                  <div>
                    <Panel header="Montana Code Girls: Volunteer Playbook" footer="learn more | request access">
                      MTCG is a state wide after school program to teach girls how to code.
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
