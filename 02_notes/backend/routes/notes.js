const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Note = require("../models/Notes");

router.get("/", (req, res) => {
  Note.findAll()
    .then((note) => res.status(200).json(note))
    .catch((err) => console.log(err));

  //res.status(200).json({ name: "example", description: "test description" });
});

router.get("/", (req, res) => {
  res.send("home");
});

module.exports = router;
