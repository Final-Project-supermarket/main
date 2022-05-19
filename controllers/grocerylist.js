const GroceryList = require("../models/GroceryList");
const UGroceryList = require("../models/UGrocerylists");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Items = require("../models/Items1");
const Items2 = require("../models/Items2");
var flist = [];
var slist = [];
var ftempdoc, stempdoc, data2, fprice, sprice; // first temp doc, second temp doc
var map = new Map();

// function nestedLoop(obj) {
//     // Take from obj List
//   const res = {};
//   function recurse(obj, current) {
//     for (const key in obj) {
//       var fprice, sprice;
//       let value = obj[key];
//       if (value != undefined) {
//         if (value && typeof value === "object") {
//           recurse(value, key);
//         } else {
//           //-------------
//           if (key == "ItemCode") {
//             Items.findOne({ ItemCode: value }).then((data) => {
//               f(data);
//             });
//             function f(data) {
//               ftempdoc = data;
//               console.log(" Came from f Funct " + ftempdoc);
//             }
//             Items2.findOne({ ItemCode: value }).then((data) => {
//               f1(data);
//             });
//             function f1(data) {
//               stempdoc = data;
//               console.log(" Came from f1 Funct " + stempdoc);
//             }
//             Items.findOne({ ItemCode: value }).then((data) => {
//               f2(data);
//             });
//             function f2(data) {
//               fprice = data.ItemPrice;
//               console.log(" Came from f2 Funct " + fprice);
//             }
//             Items2.findOne({ ItemCode: value }).then((data) => {
//               f3(data);
//             });
//             function f3(data) {
//               sprice = data.ItemPrice;
//               console.log(" Came from f3 Funct " + sprice);
//             }
//             // ftempdoc = findItem1(value);
//             // stempdoc = findItem2(value);
//             // fprice = findPrice1(value);
//             // sprice = findPrice2(value);

//             // console.log(fprice);
//             // // console.log("second prices");
//             // console.log(sprice);
//             if (fprice < sprice) {
//               flist.push(ftempdoc);
//             } else {
//               slist.push(stempdoc);
//             }
//           }

//           //---------------
//           res[key] = value;
//         }
//       }
//     }
//   }
//   recurse(obj);
//   console.log(flist);
//   console.log(slist);
//   data2 = {
//     firstlistofItems: flist,
//     secondlistofItems: slist,
//   };
//   console.log("end")
//   const gl = UGroceryList.create(data2);
//   return res;
// }
function fixedloop(obj) {
  obj.listofItems.forEach((item) => {
    for (let key in item) {
      if (key == "ItemCode") {
        Items.findOne({ ItemCode: item[key] }).then((data) => {
          f(data);
        });
        function f(data) {
          ftempdoc = data;
          console.log(" Came from f Funct " + ftempdoc);
        }
        Items2.findOne({ ItemCode: item[key] }).then((data) => {
          f1(data);
        });
        function f1(data) {
          stempdoc = data;
          console.log(" Came from f1 Funct " + stempdoc);
        }
        Items.findOne({ ItemCode: item[key] }).then((data) => {
          f2(data);
        });
        function f2(data) {
          fprice = data.ItemPrice;
          console.log(" Came from f2 Funct " + fprice);
        }
        Items2.findOne({ ItemCode: item[key] }).then((data) => {
          f3(data);
        });
        function f3(data) {
          sprice = data.ItemPrice;
          console.log(" Came from f3 Funct " + sprice);
        }
        if (fprice < sprice) {
          flist.push(ftempdoc);
        } else {
          slist.push(stempdoc);
        }
      }
    }
  });
  console.log(flist);
  console.log(slist);
  data2 = {
    firstlistofItems: flist,
    secondlistofItems: slist,
  };
  console.log("end");
  const gl = UGroceryList.create(data2);
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
  fixedloop(req.body);
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
