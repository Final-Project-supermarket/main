// @desc Get All Users
// @route Get /api/v1/users
// @access Public - No Need for Token/To be Logged In

exports.getUsers = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show All Users' });
}

// @desc Get Specific User
// @route Get /api/v1/users/:id
// @access Public - No Need for Token/To be Logged In

exports.getUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show User ${req.params.id}` });
}

// @desc  Create a User
// @route Post /api/v1/users
// @access Private - Yes Need for Token/To be Logged In

exports.createUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create User' });
}

// @desc  Update a User
// @route Put /api/v1/users/:id
// @access Private - Yes Need for Token/To be Logged In

exports.updateUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update User ${req.params.id}` });
}

// @desc  Delete a User
// @route Delete /api/v1/users/:id
// @access Private - Yes Need for Token/To be Logged In

exports.deleteUser = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete User ${req.params.id}` });
}