// @desc Get All Grocery Lists
// @route Get /api/v1/grocerylist
// @access Public - No Need for Token/To be Logged In

exports.getgroceryLists = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show All Grocery Lists' });
}

// @desc Get Specific Grocery List
// @route Get /api/v1/grocerylist/:id
// @access Public - No Need for Token/To be Logged In

exports.getgroceryList = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show Grocery List ${req.params.id}` });
}

// @desc  Create a Grocery List
// @route Post /api/v1/grocerylist
// @access Private - Yes Need for Token/To be Logged In

exports.creategroceryList = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create Grocery List' });
}

// @desc  Update a User
// @route Put /api/v1/grocerylist/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updategroceryList = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update Grocery Lists ${req.params.id}` });
}

// @desc  Delete a Grocery List
// @route Delete /api/v1/grocerylist/:id
// @access Private - Yes Need for Token/To be Logged In

exports.deletegroceryList = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete Grocery List ${req.params.id}` });
}