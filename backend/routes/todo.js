const ItemsController = require("../controllers/todo.controller");
const router = require("express").Router();

router.post("/create-item", ItemsController.createItem);

router.delete("/delete-item/:itemId", ItemsController.deleteItem);

router.put("/edit-item/:itemId", ItemsController.editItem);

router.get("/get-items", ItemsController.getAllItems);

router.get("/get-item/:itemId", ItemsController.getSingleItem);

module.exports = router;
