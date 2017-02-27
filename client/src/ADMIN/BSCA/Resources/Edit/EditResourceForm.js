import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Popout from 'react-popout';
import NavLink from '../../../../Components/NavLink';

class PopOutWrapper extends Component {
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);
    this.popoutClosed = this.popoutClosed.bind(this);
    this.state = { isPoppedOut: false };
  }

  popout() {
    this.setState({isPoppedOut: true});
  }

  popoutClosed() {
    this.setState({isPoppedOut: false});
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <Popout url='popout.html' title='Window title' onClosing={this.popoutClosed}>
          <div className="container">
            { this.props.children }
          </div>
        </Popout>
      );
    } else {
      return <button onClick={this.popout} className="btn btn-markdown buttonGlyphicon glyphicon"> Markdown Previewer</button>
    }
  }
}

const EditResourceForm = (props) =>
<div className="">
  <div className="page-header">
    <h3> {props.title} <span className="edit-text"> edititng</span> </h3>
    {
      props.internal ? (
        <PopOutWrapper>
          <ReactMarkdown source={props.content}/>
        </PopOutWrapper>
      ) : null
    }
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
              type="text" className="form-control" id="" placeholder="..." rows="20" value={props.content}
              ></textarea>
            </fieldset>
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
      <NavLink to={"admin-console/bsca/resources"}>Cancel</NavLink>
    </form>
  </div>
</div>;


export default EditResourceForm;
