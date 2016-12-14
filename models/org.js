const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrgSchema = new Schema({
  name: String,
  shortKey: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Org', OrgSchema);
