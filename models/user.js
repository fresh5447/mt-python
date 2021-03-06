var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    linkedIn: String,
    twitterHandle: String,
    githubHandle: String,
    skype: String,
    bio: String,
    loggedIn: Boolean,
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },

  twitter: String,
  linkedIn: String,
  github: String,
  blog: String,
  website: String,

  role: String,
  orgs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Org' }],
  status: String,

  completedCheckpoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Checkpoint' }],
  completedModules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],

  favorites: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Resource'
  }]

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
