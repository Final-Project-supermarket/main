const express = require('express');
const { getbestList,getgroceryList, getgroceryLists, creategroceryList, updategroceryList, deletegroceryList } = require('../controllers/grocerylist');
const router = express.Router();

router.route('/').get(getgroceryLists).post(creategroceryList);
router.route('/:id').get(getgroceryList).put(updategroceryList).delete(deletegroceryList);
router.get('/getbestList/:id',getbestList)
module.exports = router;