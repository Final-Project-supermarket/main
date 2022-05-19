const mongoose = require('mongoose');
const User = require('../models/User');


const UGroceryListSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref:'User',
//     required: true
//   },
  firstlistofItems: {
    type: Array,
    required: [true, 'Please add Items'],
    select: false
  },
  secondlistofItems: {
    type: Array,
    required: [true, 'Please add Items'],
    select: false
  }
});
// U = Updated
module.exports = mongoose.model('updatedgrocerylists', UGroceryListSchema);
