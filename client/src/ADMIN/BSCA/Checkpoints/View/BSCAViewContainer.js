import React, { Component } from 'react';
import $ from 'jquery';
import ReactMarkdown from 'react-markdown';
import NavLink from '../../../../Components/NavLink';
import { Jumbotron } from 'react-bootstrap';


class BSCAViewContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checkpoint: null
    };
  }

  componentWillMount(props) {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }

  componentWillReceiveProps() {
    this.loadCheckpoint(this.props.params.checkpoint_id);
  }


  loadCheckpoint(id) {
    $.ajax({
      url: '/api/v2/checkpoints/' + id,
      method: 'GET',
    }).done((data) => {
      this.setState({ checkpoint: data });
    });
  }
  render() {
    return (
    <div>
      <Jumbotron>
        {
          this.state.checkpoint ? (
            <div>
              <h3> { this.state.checkpoint.title }</h3>
              <NavLink className="btn btn-warning" to={ "/admin-console/bsca/course/" + this.props.params.course_id + "/module/" + this.props.params.module_id + "/edit/" + this.props.params.checkpoint_id}>Edit</NavLink>
              <p></p>
              <p>Content</p>
              <ReactMarkdown source={this.state.checkpoint.content}/>
              <p></p>
              <p>{ "Publish: " + this.state.checkpoint.publish.toString() }</p>
            </div>
          ) : <p>Loading...</p>
        }

      </Jumbotron>
    </div>
    )
  }
}

export default BSCAViewContainer;
