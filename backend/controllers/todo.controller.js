const Todos = require("../models/todoModel")

const createItem = async (req, res) => {
  try {
    const data = await Todos.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const data = await Todos.findByIdAndDelete(req.params.itemId);
    !data &&
      res
        .status(400)
        .json({ msg: `Item With Id Was Not Found: ${req.params.itemId}` });
    data &&
      res
        .status(200)
        .json({ msg: `Item Deleted With Id: ${req.params.itemId}` });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editItem = async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.params.itemId, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllItems = async (req, res) => {
  try {
    const data = await Todos.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const getSingleItem = async (req, res) => {
  try {
    const data = await Todos.findOne({ _id: req.params.itemId });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  createItem,
  deleteItem,
  getAllItems,
  editItem,
  getSingleItem,
};