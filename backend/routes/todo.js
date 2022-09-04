const ItemsController = require("../controllers/todo.controller");
const router = require("express").Router();

router.post("/create-item", async (req, res) => {
    try{
    const data = await ItemsController.createItem(req.body);
    res.status(200).json(data);
} catch {(error) => {
res.status(400).json({message: error.message});
}}
}
);

router.delete("/delete-item/:itemId", ItemsController.deleteItem);

router.put("/edit-item/:itemId", ItemsController.editItem);

router.get("/get-items", ItemsController.getAllItems);

router.get("/get-item/:itemId", ItemsController.getSingleItem);

module.exports = router;
