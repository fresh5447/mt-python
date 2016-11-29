import React from 'react';

const EditCourseForm = (props) =>
  <div className="">
    <div className="">
      <h5>edit course: {props.title}</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
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
        <fieldset className="">
          <label>publish</label>
          <input onChange={ (event) => props.onFieldChange('publish', event.target.checked)}
          type="checkbox" className="form-control pull-left" id="" placeholder="..." value={props.publish}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


export default EditCourseForm;
