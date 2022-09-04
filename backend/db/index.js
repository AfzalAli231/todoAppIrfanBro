const mongoose = require("mongoose");


const connectDb = () => {
    mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://afzalimdadabro:19me19pass@cluster0.hlvqi.mongodb.net/todoApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDb Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = connectDb;