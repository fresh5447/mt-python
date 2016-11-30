import React, { Component } from 'react';
import $ from 'jquery';
import EditResourceForm from './EditResourceForm';

class BSCAEditContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      content: null,
      link: null,
      desc: null,
      publish: null,
      internal: null
    };
  }

  componentWillMount() {
    this.loadResource(this.props.params.resource_id);
  }

  componentWillReceiveProps() {
    this.loadResource(this.props.params.resource_id);
  }

  handleSubmit(e) {
    const published = this.state.publish == null ? false : true;
    const int = this.state.internal == null ? false : true;
    const data = {
      title: this.state.title,
      content: this.state.content,
      desc: this.state.desc,
      link: this.state.link,
      publish: published,
      internal: int
    };
    $.ajax({
      url: `/api/v2/resources/id/${this.props.params.resource_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Edit Success");
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadResource(id) {
    $.ajax({
      url: '/api/v2/resources/id/' + this.props.params.resource_id,
      method: 'GET',
    }).done((data) => {
      this.setState({
        title: data.title,
        content: data.content,
        desc: data.desc,
        link: data.link,
        publish: data.published,
        internal: data.internal
      });
    });
  }
  render() {
    return (this.state.title ? <EditResourceForm
      title={this.state.title}
      desc={this.state.desc}
      publish={this.state.publish}
      content={this.state.content}
      link={this.state.link}
      internal={this.state.internal}
      onFieldChange={this.onFieldChange}
      handleSubmit={this.handleSubmit}
      /> : null
    )
  }
}

BSCAEditContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAEditContainer;
