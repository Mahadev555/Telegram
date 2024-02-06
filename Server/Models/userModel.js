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
  email: {
    type: String,
    required: false  
  },
  name: {
    type: String,
    required: false 
  },
  otp: {
    type: Number,
  },
  profileImage: {
    type: Buffer,
  },
  isAdmin:{
    type:Boolean,
    default:false  
  }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
