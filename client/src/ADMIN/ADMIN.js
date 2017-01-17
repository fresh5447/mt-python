import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import BSCA from './BSCA/Courses/CoursesContainer';
import { browserHistory } from 'react-router'


class ADMIN extends Component {
  constructor(props, context){
    super(props, context)
  }
  handleSelect(key) {
    browserHistory.push('/admin-console/' + key);
  }
  componentWillMount(){
    this.context.getUser((data) => {
      if (!data.user) {
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
            <Tabs defaultActiveKey={"home"} onSelect={this.handleSelect} id="uncontrolled-tab-example">
              <Tab eventKey={"bsca"} title="bsca">{this.props.children ? this.props.children : <BSCA />}</Tab>
              <Tab eventKey={"mtcg"} title="mtcg">{this.props.children}</Tab>
              <Tab eventKey={"users"} title="users">{this.props.children}</Tab>
              <Tab eventKey={"publisher"} title="publisher">{this.props.children}</Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>

    )
  }
}

ADMIN.contextTypes = {
  getUser: React.PropTypes.func.isRequired
}
export default ADMIN;
