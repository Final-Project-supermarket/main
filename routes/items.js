const express = require("express");
const {
    getitembyName,
  getitembyBarCode,
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");
const router = express.Router();

router.route("/").get(getItems).post(createItem);
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);
router.get('/getbyBarCode/:bcode',getitembyBarCode);
router.get('/getbyName/:name',getitembyName);
module.exports = router;
