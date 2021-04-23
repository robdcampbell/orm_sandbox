const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Default home - redirect to Login if User not logged in....");
});

router.get("/", (req, res) => {
  res.send("home");
});

module.exports = router;
