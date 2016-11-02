import React from 'react';
import { Panel } from 'react-bootstrap';

const panelStyle = {
  width: '30%',
  minHeight: '255',
  fontSize: '16',
  color: 'white',
  padding: '20',
  borderRadius: '5',
  margin: '5 1% 1% 5',
  backgroundColor: '#DB5C7E',
  height: '270',
  padding: '15',
};

const PanelComponent = (props) =>
  <Panel style={panelStyle} header={props.header} footer={props.footer}>
    {props.desc}
  </Panel>


export default PanelComponent;
