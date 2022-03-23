const Items = require('../models/Items');


// @desc Get All items
// @route Get /api/v1/items
// @access Public - No Need for Token/To be Logged In

exports.getItems = async (req, res, next) => {
    try {
        const items = await Items.find();
        res.status(200).json({ success: true, data: items });
    } catch (err) {
        res.status(400).json({ error: err });

    }

};

// @desc Get Specific item
// @route Get /api/v1/items/:id
// @access Public - No Need for Token/To be Logged In

exports.getItem = async (req, res, next) => {
    try {
        const items = await Items.findById(req.params.id);
        if (!items) {
            res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: items });
    } catch (err) {
        res.status(400).json({ error: err });

    }

};

// @desc  Create an Item
// @route Post /api/v1/items
// @access Private - Yes Need for Token/To be Logged In

exports.createItem = async (req, res, next) => {
    const item = await Items.create(req.body);
    res.status(201).json({
        success: true,
        data: item
    });
};

// @desc  Update an Item
// @route Put /api/v1/items/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updateItem = async (req, res, next) => {
    try {
        const item = await Items.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators: true
        });

        if(!item) {
           return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: item });

    } catch (err) {
        res.status(400).json({ error: err });

    }
};

// @desc  Delete an Item
// @route Delete /api/v1/items/:id
// @access Private - Yes Need for Token/To be Logged In

exports.deleteItem =  async (req, res, next) => {
    try {
        const item = await Items.findByIdAndDelete(req.params.id, req.body);
        if(!item) {
           return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: item });

    } catch (err) {
        res.status(400).json({ error: err });

    }
};