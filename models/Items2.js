const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  ItemCode: String,
  ItemName: String,
  ItemPrice: Number,
});
module.exports = mongoose.model("items6", ItemSchema);
// FIX MULTIPLE COLLECTION
