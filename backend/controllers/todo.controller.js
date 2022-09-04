const Todos = require("../models/todoModel")

exports.createItem = async (body) => {
  try {
    const data = await Todos.create(body);
    return data
  } catch (error) {
    return error
  }
};

exports.deleteItem = async (itemId) => {
    const data = await Todos.findByIdAndDelete(itemId);
    if(!data) {return "Item not Found"}else{return "Item Deleted"}
};

exports.editItem = async (itemId, body) => {
  const data = await Todos.findByIdAndUpdate(itemId, body);
  return data;
};

exports.getAllItems = async () => {
    const data = await Todos.find({});
  return data;
};

exports.getSingleItem = async (itemId) => {
    const data = await Todos.findOne({ _id: itemId });
    return data;
};
