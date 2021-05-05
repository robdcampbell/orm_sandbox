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

router.post("/", (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };

  let { title, description } = data;

  console.log(data);

  Note.create({
    title,
    description,
  })
    .then((note) => res.redirect("/profile"))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  Note.destroy({
    where: {
      id: noteId,
    },
  })
    .then((note) => console.log(`${noteId} deleted!`))
    .catch((err) => console.log(err));
});

module.exports = router;
