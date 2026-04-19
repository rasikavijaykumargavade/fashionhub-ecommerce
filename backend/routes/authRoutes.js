const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup
router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json(user);
  } else {
    res.status(400).json("Invalid credentials");
  }
});

module.exports = router;
