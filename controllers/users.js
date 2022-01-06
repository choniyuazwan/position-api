const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  const { email, password } = req.body;

  const user = await User.create({
    email,
    password
  });

  res.json({
    data: user,
    message: "successfully register"
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email
  });

  if (!user) {
    throw Error("User not found");
  }
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h"
    });

    res.json({
      data: user,
      token,
      message: "successfully login"
    });
  } else {
    res.status(401).json({
      message: "Unauthenticated"
    });
  }
}

async function getAll(req, res) {
  const user = await User.find({});
  res.json({
    data: user
  });
}

async function get(req, res) {
  const user = await User.findOne({
    _id: req.params.id
  });
  res.json({
    data: user
  });
}

module.exports = {
  create,
  login,
  getAll,
  get
}
