const express = require('express');
const {createpredefined,getbestList,getgroceryList, getgroceryLists, creategroceryList, updategroceryList, deletegroceryList } = require('../controllers/grocerylist');
const router = express.Router();
const { protect } = require('../middleware/auth')


router.route('/').get(getgroceryLists).post(protect,creategroceryList);
router.route('/:id').get(getgroceryList).put(updategroceryList).delete(deletegroceryList);
router.get('/getbestList/:id',getbestList)
router.post('/createpredefined').post(protect,createpredefined);
module.exports = router;