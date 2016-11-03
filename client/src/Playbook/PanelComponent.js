import React from 'react';
import '../index.css';
import { Panel } from 'react-bootstrap';

// const panelStyle = {
//   width: '30%',
//   minHeight: '255px',
//   fontSize: '16px',
//   color: 'white',
//   padding: '20px',
//   borderRadius: '5px',
//   margin: '5 1% 1% 5',
//   backgroundColor: '#DB5C7E',
//   height: '270px'
// };

const PanelComponent = (props) =>
  <Panel className="playbook-panel" header={props.header} footer={props.footer}>
    {props.desc}
  </Panel>


export default PanelComponent;
