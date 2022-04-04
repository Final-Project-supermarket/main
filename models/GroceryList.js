const mongoose = require('mongoose');
const User = require('../models/User');
const Items = require('../models/Items');

const GroceryListSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'Enter Your Uniqe Email'],
  },
  listofItems: {
    type: Array,
    required: [true, 'Please add Items'],
    minlength: 1,
    select: false
  }
});

module.exports = mongoose.model('grocerylists', GroceryListSchema);
