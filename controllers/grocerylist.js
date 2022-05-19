const GroceryList = require("../models/GroceryList");
const UGroceryList = require("../models/UGrocerylists");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Items = require("../models/Items1");
const Items2 = require("../models/Items2");
var flist = [];
var slist = [];
var ftempdoc, stempdoc, data2, fprice, sprice; // first temp doc, second temp doc

async function createupdatedList(obj) {
  for (const key in obj.listofItems) {
    bcode = obj.listofItems[key].ItemCode;
    await Items.findOne({ ItemCode: bcode }).then((data) => {
      ftempdoc = data; // Same Item From 1 Supermarket
    });
    await Items2.findOne({ ItemCode: bcode }).then((data) => {
      stempdoc = data; // Same item from 2 Supermarket
    });
    await Items.findOne({ ItemCode: bcode }).then((data) => {
      fprice = data.ItemPrice; // Price from 1 supermarket
    });
    await Items2.findOne({ ItemCode: bcode }).then((data) => {
      sprice = data.ItemPrice; // Same item from 2 Supermarket
    });
    if (fprice < sprice) {
      // If price from 1 super is cheaper then 2 super - insert to first list
      flist.push(ftempdoc);
    } else {
      // Insert to second list
      slist.push(stempdoc);
    }

    //console.log(`${key}: ${obj.listofItems[key].ItemCode}`);
  }
  console.log(flist); // Print the First List
  console.log(slist); // Second List
  data2 = {
    // Create Obj
    firstlistofItems: flist,
    secondlistofItems: slist,
  };
  console.log("end");
  const gl = UGroceryList.create(data2); // Insert
}

// IMPORT ITEM 1 AND TWO

// @desc Get All Grocery Lists
// @route Get /api/v1/grocerylist
// @access Public - No Need for Token/To be Logged In

exports.getgroceryLists = asyncHandler(async (req, res, next) => {
  try {
    const gl = await GroceryList.find();
    res.status(200).json({ success: true, data: gl });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// @desc Get Specific Grocery List
// @route Get /api/v1/grocerylist/:id
// @access Public - No Need for Token/To be Logged In

exports.getgroceryList = asyncHandler(async (req, res, next) => {
  try {
    const gl = await GroceryList.findById(req.params.id);
    if (!gl) {
      res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data: gl });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// @desc  Create a Grocery List
// @route Post /api/v1/grocerylist()
// @access Private - Yes Need for Token/To be Logged In

exports.creategroceryList = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const gl = await GroceryList.create(req.body);

  await createupdatedList(req.body);
  res.status(201).json({
    success: true,
    data: gl,
  });
});

// @desc  Update a User
// @route Put /api/v1/grocerylist/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updategroceryList = asyncHandler(async (req, res, next) => {
  try {
    const gl = await GroceryList.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!gl) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data: gl });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// @desc  Delete a Grocery List
// @route Delete /api/v1/grocerylist/:id
// @access Private - Yes Need for Token/To be Logged In

exports.deletegroceryList = asyncHandler(async (req, res, next) => {
  try {
    const gl = await GroceryList.findByIdAndDelete(req.params.id, req.body);
    if (!gl) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data: gl });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

exports.getbestList = asyncHandler(async (req, res, next) => {
  // Fetch List of
  // Algorithm
  // Return

  res.status(200).json({
    success: true,
    data: "Succes, Will Display Best and Cheapest List",
  });
});
