import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Home from './Home/HomeContainer';
import { browserHistory } from 'react-router'


class MainContainer extends Component {
  constructor(props, context){
    super(props, context)
  }
  handleSelect(key) {
    browserHistory.push('/big-sky-code-academy/' + key);
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
              <Tab eventKey={"home"} title="Home">{ this.props.children }</Tab>
              <Tab eventKey={"resources"} title="Resources">{this.props.children}</Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>

    )
  }
}

MainContainer.contextTypes = {
  getUser: React.PropTypes.func.isRequired
}
export default MainContainer;
