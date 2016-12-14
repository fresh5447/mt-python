import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid, Row, Col, Panel } from 'react-bootstrap';



const CheckpointView = (props) =>
<Grid>
  <Row>
    <Col xs={10}>
      <Panel header={ props.checkpoint.title }>
        <ReactMarkdown source={props.checkpoint.desc}/>
        <ReactMarkdown source={props.checkpoint.content}/>
        {
          props.checkpoint.assignment ? <ReactMarkdown source={props.checkpoint.assignment}/> : null
        }

      </Panel>
    </Col>
  </Row>
</Grid>

export default CheckpointView;
