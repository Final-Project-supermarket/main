const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  ItemCode: String,
  ItemName: String,
  ItemPrice: Number,
});
module.exports = mongoose.model("items5", ItemSchema); // Change After Normalize XML - NADAV
// FIX MULTIPLE COLLECTION
