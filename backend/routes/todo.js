const ItemsController = require("../controllers/todo.controller");
const router = require("express").Router();

router.post("/create-item", async (req, res) => {
   try {
    const data = await ItemsController.createItem(req.body);
    res.status(200).json(data);
   } catch (error) {
    
    res.status(400).json({ message: error.message });
   } 
}
);

router.delete("/delete-item/:itemId", async (req, res) => {
  try {
    const data = await ItemsController.deleteItem(req.params.itemId);
  res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.put("/edit-item/:itemId", async (req, res) => {
  try {
    const data = await ItemsController.editItem(req.params.itemId, req.body);
  res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.get("/get-items", async (req, res) => {
  try {
    const data = await ItemsController.getAllItems();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.get("/get-item/:itemId", async (req, res) => {
  try {
    const data = await ItemsController.getSingleItem(req.params.itemId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

module.exports = router;
