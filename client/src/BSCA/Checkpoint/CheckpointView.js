import React from 'react';
import ReactMarkdown from 'react-markdown';

const CheckpointView = (props) =>
<div>
  <h4 className="checkpoint-header">{ props.checkpoint.title }</h4>
  <ReactMarkdown source={props.checkpoint.content}/>
</div>


export default CheckpointView;
