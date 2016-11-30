import React, { Component } from 'react';
import $ from 'jquery';
import EditModuleForm from './EditModuleForm';

class BSCAEditContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      title: null,
      desc: null,
      publish: null
    };
  }

  componentWillMount() {
    this.loadModule(this.props.params.module_id);
  }

  componentWillReceiveProps() {
    this.loadModule(this.props.params.module_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      publish: this.state.publish,
    };
    $.ajax({
      url: `/api/v2/modules/${this.props.params.module_id}`,
      method: 'PUT',
      data
    }).done((d) => {
      this.context.sendNotification("Module Edit Success");
    });
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }


  loadModule(id) {
    $.ajax({
      url: '/api/v2/modules/' + this.props.params.module_id,
      method: 'GET',
    }).done((data) => {
      this.setState({
        title: data.title,
        desc: data.desc,
        publish: data.publish,
        course: data.course
      });
    });
  }
  render() {
    return (this.state.title ? <EditModuleForm
      title={this.state.title}
      desc={this.state.desc}
      publish={this.state.publish}
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
