const Todos = require("../models/todoModel")

exports.createTodo = async (body) => {
    const data = await Todos.create(body);
    return data
};

exports.deleteTodo = async (TodoID) => {
  const data = await Todos.findByIdAndDelete(TodoID);
  if (!data) {
    throw new Error("Item not Found");
  } else {
    return "Item Deleted";
  }
};

exports.editTodo = async (TodoID, body) => {
  const data = await Todos.findByIdAndUpdate(TodoID, body);
  return data;
};

exports.getAllTodos = async () => {
  const data = await Todos.find({});
  return data;
};

exports.getSingleTodo = async (TodoID) => {
    const data = await Todos.findOne({ _id: TodoID });
    return data;
};
