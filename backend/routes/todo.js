const {
  createItem,
  deleteItem,
  editItem,
  getAllItems,
  getSingleItem,
} = require("../controllers/todo.controller");
const router = require("express").Router();

router.post("/create-item", createItem);

router.delete("/delete-item/:itemId", deleteItem);

router.put("/edit-item/:itemId", editItem);

router.get("/get-items", getAllItems);

router.get("/get-item/:itemId", getSingleItem);

module.exports = router;
