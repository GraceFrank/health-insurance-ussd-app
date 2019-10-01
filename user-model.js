const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    minlength: 2,
    maxlength: 255,
    lowercase: true,
    trim: true
  },
  paymentPlan: {
    type: String,
    enum: ['monthly', 'daily', 'yearly']
  },

  lga: { type: String }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
