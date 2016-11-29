const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  content: String,
  link: String,
  publish: Boolean,
  desc: String,
  internal: Boolean
});

module.exports = mongoose.model('Resource', ResourceSchema);
