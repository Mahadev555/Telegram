const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Mobile: Number,
    Password: String,
  });

const UserModel = mongoose.model('users', UserSchema);


module.exports = UserModel
