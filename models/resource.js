const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  content: String,
  link: String,
  publish: Boolean,
  desc: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  fav: Boolean,
  numFavs: { type: Number, default: 0 },
  internal: Boolean
});

module.exports = mongoose.model('Resource', ResourceSchema);
