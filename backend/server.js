const epress = require("express");
const cors = require("cors");
const app = epress();
const mongoose = require("mongoose");
const Todos = require("./todoModel");
const path = require("path")

app.use(epress.json());
app.use(cors({origin: "https://todoappirfanbhai.herokuapp.com/"}))

mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://afzalimdadabro:19me19pass@cluster0.hlvqi.mongodb.net/todoApp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("MongoDb Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use(epress.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.post("/create-item", async (req, res) => {
  try {
    const data = await Todos.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/delete-item/:itemId", async (req, res) => {
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
});

app.put("/edit-item/:itemId", async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate( req.params.itemId, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/get-items", async (req, res) => {
    try {
        
    const data = await Todos.find({});
    res.status(200).json(data)
    } catch (error) {
    res.status(400).send({ msg: error.message });
    }
});

app.get("/get-item/:itemId",  async (req, res) => {
    try {
    const data = await Todos.findOne({_id: req.params.itemId});
    res.status(200).json(data)
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server runned")
})
