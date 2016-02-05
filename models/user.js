var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String },
}, {timestamps: true });


module.exports = mongoose.model('User', userSchema);
