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
    
  },
  secondlistofItems: {
    type: Array,
    required: [true, 'Please add Items'],
    
  }
});
// U = Updated
module.exports = mongoose.model('updatedgrocerylists', UGroceryListSchema);
