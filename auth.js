<<<<<<< HEAD:backend/routes/auth.js
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ token: "mock-jwt-token" });
});

module.exports = router;
=======

const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ token: "mock-jwt-token" });
});

module.exports = router;
>>>>>>> d6cd3ace63f8bd8988900863a3b2f67933644b2a:auth.js
