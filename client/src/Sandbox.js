import React from 'react';
import Codemirror from 'react-codemirror';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import LeftArrow from 'react-icons/lib/fa/arrow-left';
import CheckBox from 'react-icons/lib/fa/check';
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

var defaults = {
	markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

var CodePen = React.createClass({
  render: function(){
    return (
      <div>
        <p data-height="265" data-theme-id="0" data-slug-hash="qRNOXM" data-default-tab="css,result" data-user="fresh5447" data-embed-version="2" data-pen-title="CSS Positioning: Step Two" class="codepen">See the Pen <a href="http://codepen.io/fresh5447/pen/qRNOXM/">CSS Positioning: Step Two</a> by Douglas Walter (<a href="http://codepen.io/fresh5447">@fresh5447</a>) on <a href="http://codepen.io">CodePen</a>.</p>
        <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      </div>

    )
  }
})

var CM = React.createClass({
	getInitialState () {
		return {
			code: defaults.markdown,
			readOnly: false,
			mode: 'markdown',
		};
	},
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
	},
	changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},
	interact (cm) {
		console.log(cm.getValue());
	},
	render () {
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				<Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} interact={this.interact} />
				<div style={{ marginTop: 10 }}>
					<select onChange={this.changeMode} value={this.state.mode}>
						<option value="markdown">Markdown</option>
						<option value="javascript">JavaScript</option>
					</select>
					<button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
				</div>
			</div>
		);
	}
});



const Movie = () =>
	<Video controls poster="BSCA_Logo.png" onCanPlayThrough={() => {
	            console.log("pretty neat!")
	        }}>
	  <source src="testing.webm" />
	</Video>

var cb = {
  float: "left",
  color: "green"
}


// const Code = () =>
//   <CodeMirror value={{code: "// Code"}} options={{ lineNumbers: true }} />

const Sandbox = () =>
  <div className="container cp-flex-container">
    <div className="checkpoints-container">
      <h4>Some Course Title</h4>
      <div className="progress">
        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100" style={{width: "66%"}}>
          <span>66% Complete</span>
        </div>
      </div>
      <ul>
        <li><CheckBox style={cb}/> Checkpoint One</li>
        <li><CheckBox style={cb}/>Checkpoint Two</li>
        <li className=""><CheckBox style={cb}/>Learning to do a pretty long checkpoint</li>
        <li><CheckBox style={cb}/>Checkpoint Four</li>
        <li>Checkpoint Five</li>
        <li>Checkpoint Six</li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">change course<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Intro To Web Dev</a></li>
            <li><a href="#">Backend Development</a></li>
            <li><a href="#">Frontend Developement</a></li>
          </ul>
        </li>
      </ul>
    </div>


    <div className="active-checkpoint-container">
      <div className="cp-nav-container">
        <div className="cp-nav-item btn btn-primary">
          <LeftArrow />
          <h6> Previous </h6>
        </div>
        <div className="cp-nav-item btn btn-primary">
          <h6> Complete / Next </h6>
          <RightArrow />
        </div>
      </div>

      <h4 className="checkpoint-header">Active Checkpoint</h4>
      <p className="checkpoints-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem</p>
      <Movie />
      <CM />
      <CodePen />
    </div>

  </div>


export default Sandbox;

// https://www.npmjs.com/package/react-html5video
// https://jsfiddle.net/mderrick/7s9a311q/1/
