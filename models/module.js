const mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment'),
Schema = mongoose.Schema;

var connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/lms");
autoIncrement.initialize(connection);

const ModuleSchema = new Schema({
  title: String,
  desc: String,
  order: { type: Number, default: 0 },
  publish: Boolean,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

ModuleSchema.plugin(autoIncrement.plugin, { model: 'Module', field: 'order' });


module.exports = mongoose.model('Module', ModuleSchema);
