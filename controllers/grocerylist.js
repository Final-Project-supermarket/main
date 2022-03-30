const GroceryList = require('../models/GroceryList');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


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
// @route Post /api/v1/grocerylist
// @access Private - Yes Need for Token/To be Logged In

exports.creategroceryList = asyncHandler(async (req, res, next) => {
    const gl = await GroceryList.create(req.body);
    res.status(201).json({
        success: true,
        data: gl
    });
});

// @desc  Update a User
// @route Put /api/v1/grocerylist/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updategroceryList = asyncHandler(async (req, res, next) => {
    try {
        const gl = await GroceryList.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        });

        if(!gl) {
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

 exports.deletegroceryList =  asyncHandler(async (req, res, next) => {
    try {
        const gl = await GroceryList.findByIdAndDelete(req.params.id, req.body);
        if(!gl) {
           return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: gl });

    } catch (err) {
        res.status(400).json({ error: err });

    }
});

exports.getbestList =  asyncHandler(async (req, res, next) => {
res.status(200).json({ success: true, data: "Succes, Will Display Best and Cheapest List"})
});