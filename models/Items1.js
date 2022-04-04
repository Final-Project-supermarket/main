const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  ItemCode: String,
  ItemName: String,
  ItemPrice: Number,
});
module.exports = mongoose.model("items1", ItemSchema);
// FIX MULTIPLE COLLECTION
