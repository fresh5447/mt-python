import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const ModulesList = (props) =>
  props.modules.map((item)=>{
    return (
      <Panel header={item.title}>
        {item.desc}
      </Panel>
    )
  })
