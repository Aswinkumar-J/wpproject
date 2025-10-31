const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    validate: {
      validator: (v) => /^[0-9]{10}$/.test(v),
      message: (props) => `${props.value} is not a valid mobile number`,
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (v) => /^\S+@\S+\.\S+$/.test(v),
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: [true, 'Role is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password is shorter than the minimum allowed length'],
    maxlength: [255, 'Password is longer than the maximum allowed length '], // note the space at end
  },
});

module.exports = mongoose.model('User', userSchema);
