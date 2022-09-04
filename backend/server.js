// Imports
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./db");
const todoRoutes = require("./routes/todo");
const path = require("path");

// Use of Json
app.use(express.json());
// Cors Problems Solve
app.use(cors({origin: "http://localhost:3000"}))
// Routes
app.use("/", todoRoutes);

// Database Connection
connectDb();

// hosting path

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// App Listener
app.listen(process.env.PORT || 5000, () => {
    console.log("Server runned")
})
