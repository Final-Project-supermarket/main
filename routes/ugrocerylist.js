const express = require('express');
const {getlast} = require('../controllers/ucart');
const router = express.Router();
const { protect } = require('../middleware/auth')
// const { protect } = require('../middleware/auth')
router.route('/').get(getlast);
module.exports = router;

