const express = require('express');
const {createpredefined,getlast} = require('../controllers/precart');
const router = express.Router();
const { protect } = require('../middleware/auth')
// const { protect } = require('../middleware/auth')
router.route('/').post(protect,createpredefined).get(getlast);
module.exports = router;

