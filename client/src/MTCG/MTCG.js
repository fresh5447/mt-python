import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import PlaybookContainer from './Playbook/PlaybookContainer';
import { browserHistory } from 'react-router'

class MTCG extends Component {
  constructor(props, context){
    super(props, context)
  }
  handleSelect(key) {
    browserHistory.push('/montana-code-girls/' + key);
  }
  componentWillMount(){
    this.context.getUser((data) => {
      if (!data.user && !data.local) {
        alert('you must be signed in to view this');
        return browserHistory.push('/signin');
      }
    });
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

MTCG.contextTypes = {
  getUser: React.PropTypes.func.isRequired
}
export default MTCG;
