const express = require('express');
const {createpredefined} = require('../controllers/grocerylist');
const router = express.Router();
const { protect } = require('../middleware/auth')


router.route('/').post(protect,createpredefined);
module.exports = router;