import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid, Row, Col, Panel } from 'react-bootstrap';



const CheckpointView = (props) =>
<Grid className="">
  <Row>
    <Col xs={10}>
      <Panel header={ props.checkpoint.title }>
        <ReactMarkdown source={props.checkpoint.content}/>
      </Panel>
    </Col>
  </Row>
</Grid>

export default CheckpointView;
