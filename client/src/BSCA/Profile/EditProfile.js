import React from 'react';

const EditProfile = (props) =>
  <div className="">
    <div className="">
      <h5>edit {props.user.local.firstName + "'s" } profile</h5>
    </div>
    <div className="container cp-form">
      <form onSubmit={props.handleSubmit}>
        <fieldset className="form-group">
          <label>twitter</label>
          <input onChange={ (event) => props.onFieldChange('twitter', event.target.value)}
            type="text" className="form-control" id="" placeholder="twitter" value={props.twitter}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>linkedin</label>
          <input onChange={ (event) => props.onFieldChange('linkedIn', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." value={props.linkedIn}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>blog</label>
          <input onChange={ (event) => props.onFieldChange('blog', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." value={props.blog}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>website</label>
          <input onChange={ (event) => props.onFieldChange('website', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." value={props.website}
          />
        </fieldset>
        <fieldset className="form-group">
          <label>github</label>
          <input onChange={ (event) => props.onFieldChange('github', event.target.value)}
          type="text" className="form-control" id="" placeholder="..." value={props.github}
          />
        </fieldset>
        <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
      </form>
    </div>
  </div>;


export default EditProfile;
