import React from 'react';
import { Panel, Jumbotron } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const PostCheckpointForm = (props) =>
  <Jumbotron>
    <div className="">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <label>checkpoint title</label>
          <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>content</label>
          <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
            className="form-control" required="true" rows="7"
          ></textarea>
        </fieldset>
        <fieldset className="">
          <label>publish</label>
          <input onChange={ (event) => props.onFieldChange('publish', event.target.checked)}
          type="checkbox" className="form-control pull-left" id="publish-course" placeholder="..."
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
    <div>
      <h2>Preview</h2>
      <Panel header={ props.title ? props.title : "none"}>
        <ReactMarkdown source={props.content ? props.content : "none"}/>
      </Panel>
  </div>
  </Jumbotron>

export default PostCheckpointForm;
