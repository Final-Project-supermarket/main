const Items = require('../models/Items');


// @desc Get All items
// @route Get /api/v1/items
// @access Public - No Need for Token/To be Logged In

exports.getItems = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show All Items' });
}

// @desc Get Specific item
// @route Get /api/v1/items/:id
// @access Public - No Need for Token/To be Logged In

exports.getItem = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show Item ${req.params.id}` });
}

// @desc  Create an Item
// @route Post /api/v1/items
// @access Private - Yes Need for Token/To be Logged In

exports.createItem = async (req, res, next) => {
const item =  await Items.create(req.body);
res.status(201).json({
    success:true,
    data: item
});
};

// @desc  Update an Item
// @route Put /api/v1/items/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updateItem = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update Item ${req.params.id}` });
}

// @desc  Delete an Item
// @route Delete /api/v1/items/:id
// @access Private - Yes Need for Token/To be Logged In

exports.deleteItem = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete Item ${req.params.id}` });
}