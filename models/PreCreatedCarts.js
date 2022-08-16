const mongoose = require('mongoose');
const User = require('../models/User');


const PreCreatedCartsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref:'User',
    required: true
  },
  listofItems: {
    type: Array,
    required: [true, 'Please add Items'],
    minlength: 1,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('precreatedcarts', PreCreatedCartsSchema);
