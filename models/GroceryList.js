const mongoose = require('mongoose');
const User = require('../models/User');


const GroceryListSchema = new mongoose.Schema({
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
  }
});

module.exports = mongoose.model('grocerylists', GroceryListSchema);
