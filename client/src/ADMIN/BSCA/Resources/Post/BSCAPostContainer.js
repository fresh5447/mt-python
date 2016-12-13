import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PostResourceForm from './PostResourceForm';
import $ from 'jquery';

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

class BSCAPostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.submitCategory = this.submitCategory.bind(this);


    this.state = {
      title: null,
      content: null,
      link: null,
      desc: null,
      publish: null,
      internal: null,
      categories: [],
      allCategories: null,
      createCategory: null
    };

  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }
  loadCategories() {
    $.ajax({
      url: '/api/v2/categories',
      method: 'GET',
    }).done((data) => {
      this.setState({ allCategories: data });
    });
  }

  addCategory(cat){
    const newState = this.state.categories;
    console.log(newState);
    newState.push(cat);
    this.setState({ categories: newState })
  }
  removeCategory(cat){
    const newState = this.state.categories;
    console.log(newState);
    newState.remove(cat);
    this.setState({ categories: newState })
  }

  componentWillMount(){
    this.loadCategories();
  }

  submitCategory(e){
    e.preventDefault();
    const data = { name: this.state.createCategory };
    $.ajax({
      url: `/api/v2/categories`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Category Created");
      const path = `/admin-console/bsca`
      browserHistory.push(path);
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const published = this.state.publish == null ? false : true;
    const int = this.state.internal == null ? false : true;
    const catIds = this.state.categories.map(item => item._id);
    const data = {
      title: this.state.title,
      content: this.state.content,
      desc: this.state.desc,
      link: this.state.link,
      publish: published,
      internal: int,
      categories: catIds
    };
    $.ajax({
      url: `/api/v2/resources`,
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Posted");
      const path = `/admin-console/bsca`
      browserHistory.push(path);
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    internal={this.state.internal}
    submitCategory={this.submitCategory}
    allCategories={this.state.allCategories}
    categories={this.state.categories}
    content={this.state.content}
    handleSubmit={this.handleSubmit}
    addCategory={this.addCategory}
    removeCategory={this.removeCategory}
    />;
  }

}

BSCAPostContainer.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};
export default BSCAPostContainer;
