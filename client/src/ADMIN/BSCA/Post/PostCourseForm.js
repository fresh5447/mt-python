import React from 'react';

const PostCourseForm = (props) =>
  <div className="">
    <div className="page-header">
      <h2>Create Course</h2>
    </div>
    <div className="">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <label>course title</label>
          <input required="true" onChange={ (event) => props.onFieldChange('title', event.target.value)}
            type="text" className="form-control" id="" placeholder="title"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>description</label>
          <input required="true" onChange={ (event) => props.onFieldChange('desc', event.target.value)}
          type="text" className="form-control" id="" placeholder="..."
          />
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
  </div>;

export default PostCourseForm;
