const Todos = require("../models/todoModel")

exports.createItem = async (body) => {
    const data = await Todos.create(body);
    return data
};

exports.deleteItem = async (req, res) => {
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

exports.editItem = async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.params.itemId, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const data = await Todos.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

exports.getSingleItem = async (req, res) => {
  try {
    const data = await Todos.findOne({ _id: req.params.itemId });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
