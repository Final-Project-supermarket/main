const GroceryList = require("../models/GroceryList");
const UGroceryList = require("../models/UGrocerylists");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Items = require("../models/Items1");
const Items2 = require("../models/Items2");
const PreCreatedCartsSchema = require("../models/PreCreatedCarts");
var flist = [];
var slist = [];
var ftempdoc, stempdoc, data2, fprice, sprice; // first temp doc, second temp doc

exports.createpredefined = asyncHandler(async (req, res, next) => {
    req.body.user = req.user.id;
    console.log("happened")
    const gl = await PreCreatedCartsSchema.create(req.body);
    res.status(201).json({
        success: true,
        data: gl,
    });
});
exports.getlast = asyncHandler(async (req, res, next) => {
    try {
        console.log("gothere");
        const prelist = await PreCreatedCartsSchema.find({}).sort({_id:-1}).limit(1);
        console.log(prelist.listofItems);
        res.status(200).json({ success: true, data: prelist });
    } catch (err) {
        res.status(400).json({ error: err });

    }

});

