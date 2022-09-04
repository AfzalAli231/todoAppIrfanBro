const ItemsController = require("../controllers/todo.controller");
const router = require("express").Router();

router.post("/create-item", async (req, res) => {
    try {
    const data = await ItemsController.createTodo(req.body);
    res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    } 
}
);

router.delete("/delete-item/:TodoID", async (req, res) => {
  try {
    const data = await ItemsController.deleteTodo(req.params.TodoID);
  res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.put("/edit-item/:TodoID", async (req, res) => {
  try {
    const data = await ItemsController.editTodo(req.params.TodoID, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.get("/get-items", async (req, res) => {
  try {
    const data = await ItemsController.getAllTodos();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

router.get("/get-item/:TodoID", async (req, res) => {
  try {
    const data = await ItemsController.getSingleTodo(req.params.TodoID);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
});

module.exports = router;
