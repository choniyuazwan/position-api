const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes");

mongoose.connect("mongodb://localhost/exampledb").then(() => {
  console.log("success connect db");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", userRouter);

app.listen(8000, () => {
  console.log("server run successfully");
});
