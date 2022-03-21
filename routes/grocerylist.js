const express = require('express');
const { getgroceryList, getgroceryLists, creategroceryList, updategroceryList, deletegroceryList } = require('../controllers/grocerylist');
const router = express.Router();

router.route('/').get(getgroceryLists).post(creategroceryList);
router.route('/:id').get(getgroceryList).put(updategroceryList).delete(deletegroceryList);
module.exports = router;