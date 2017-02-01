import React from 'react';
import { Panel } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const EditCheckpointForm = (props) =>
  <div className="">
    <div className="">
      <h5>edit checkpoint: {props.title}</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <label>title</label>
          <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title" value={props.title}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>content</label>
          <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
            className="form-control" required="true" rows="7" value={props.content}
          ></textarea>
        </fieldset>
        <fieldset className="">
          <label>publish</label>
          <input onChange={ (event) => props.onFieldChange('publish', event.target.checked)}
          type="checkbox" className="form-control pull-left" id="" placeholder="..." value={props.publish}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
    <div>
      <div>
        <h2>Preview</h2>
        <Panel header={ props.title ? props.title : "none"}>
          <ReactMarkdown source={props.desc ? props.desc : "none"}/>
          <ReactMarkdown source={props.content ? props.content : "none"}/>
          {
            props.assignment ? <ReactMarkdown source={props.assignment}/> : null
          }

        </Panel>
      </div>
    </div>
  </div>;


export default EditCheckpointForm;
