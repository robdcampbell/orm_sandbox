const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

// Get Users List
router.get("/", (req, res) =>
  User.findAll()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => console.log(err))
);

// Display Add User Form
// router.get("/users", (req, res) => {
//   res.send("users");
// });

// NEW add
// Add a User
router.get("/add", (req, res) => {
  const data = {
    name: "Wayne Gretszy",
    contact_email: "number99@gmail.com",
  };
  let { name, contact_email } = data;

  User.create({
    name,
    contact_email,
  })
    .then((user) => res.redirect("/users"))
    .catch((err) => console.log(err));
});

// Add a User
// router.get("/add", (req, res) => {
//   const data = {
//     name: "John Doe",
//     contact_email: "john@gmail.com",
//   };
//   let { name, contact_email } = data;

//   User.create({
//     name,
//     contact_email,
//   })
//     .then((user) => res.redirect("/"))
//     .catch((err) => console.log(err));
// });

module.exports = router;
