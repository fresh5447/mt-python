import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Popout from 'react-popout';

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



const EditCheckpointForm = (props) =>
  <div className="">
    <div className="">
      <h3> {props.title} <span className="edit-text"> edititng</span> </h3>
      <PopOutWrapper>
        <ReactMarkdown source={props.content}/>
      </PopOutWrapper>
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
            className="form-control" required="true" rows="25" value={props.content}
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
  </div>;


export default EditCheckpointForm;
