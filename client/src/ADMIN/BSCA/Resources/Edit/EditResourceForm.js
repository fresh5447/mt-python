import React from 'react';
import ReactMarkdown from 'react-markdown';

const EditCourseForm = (props) =>
<div className="">
  <div className="page-header">
    <h2>Edit Resource</h2>
  </div>
  <div className="">
    <form onSubmit={props.handleSubmit}>
      <fieldset className="">
        <label>Check box if this is a BSCA tutorial, leave blank if external link</label>
        <input onChange={ (event) => props.onFieldChange('internal', event.target.checked)}
        type="checkbox" className="form-control pull-left" id="" placeholder="..." value={props.internal}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>title</label>
        <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
          type="text" className="form-control" id="" placeholder="title" value={props.title}
        />
      </fieldset>
      <fieldset className="form-group">
        <label>description</label>
        <input required="true" onChange={ (event) => props.onFieldChange('desc', event.target.value)}
        type="text" className="form-control" id="" placeholder="..." value={props.desc}
        />
      </fieldset>
      {
        props.internal ? (
          <div>
            <fieldset className="form-group">
              <label>content</label>
              <textarea onChange={ (event) => props.onFieldChange('content', event.target.value)}
              type="text" className="form-control" id="" placeholder="..." rows="7" value={props.content}
              ></textarea>
            </fieldset>
            <ReactMarkdown source={props.content} />
          </div>
        ) : (
          <fieldset className="form-group">
            <label>link</label>
            <input onChange={ (event) => props.onFieldChange('link', event.target.value)}
            type="text" className="form-control" id="" placeholder="..." value={props.link}
            />
          </fieldset>
        )
      }
      <fieldset className="">
        <label>publish</label>
        <input onChange={ (event) => props.onFieldChange('publish', event.target.checked)}
        type="checkbox" className="form-control pull-left" id="publish-course" placeholder="..." value={props.checked}
        />
      </fieldset>
      <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
    </form>
  </div>
</div>;


export default EditCourseForm;
