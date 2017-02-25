const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: String,
  desc: String,
  publish: Boolean,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  enrolled: Boolean,
  imgUrl: String
});

module.exports = mongoose.model('Course', CourseSchema);
