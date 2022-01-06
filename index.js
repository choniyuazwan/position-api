const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const userRouter = require("./routes");

mongoose.connect("mongodb://localhost/exampledb").then(() => {
  console.log("success connect db");
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", userRouter);

app.listen(8000, () => {
  console.log("server run successfully");
});
