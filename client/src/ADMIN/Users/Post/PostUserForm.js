import React from 'react';

const PostUserForm = (props) =>
  <div className="">
    <div className="page-header">
      <h2>Add User</h2>
    </div>
    <div className="">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <label>first name</label>
          <input required="true" onChange={ (event) => props.onFieldChange('firstName', event.target.value)}
            type="text" className="form-control" id="" placeholder="first"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>last name</label>
          <input required="true" onChange={ (event) => props.onFieldChange('lastName', event.target.value)}
          type="text" className="form-control" id="" placeholder="last"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>email</label>
          <input required="true" onChange={ (event) => props.onFieldChange('email', event.target.value)}
          type="email" className="form-control" id="" placeholder="email"
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;

export default PostUserForm;
