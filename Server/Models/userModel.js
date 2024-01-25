const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    required: true
},
password: {
    type: String,
    required: true
},
  });

const UserModel = mongoose.model('users', UserSchema);


module.exports = UserModel
