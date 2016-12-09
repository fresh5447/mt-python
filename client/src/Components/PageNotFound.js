import React from 'react';
import NavLink from './NavLink';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>Page Not Found</h1>
              <NavLink to="/">PLEASE GO HOME</NavLink>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
})
