const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/items');
let express = require('express')
const router = express.Router();

router.route('/').get(getItems).post(createItem);
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem);
module.exports = router;