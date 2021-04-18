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

// get Specific User test
router.get("/wayne", (req, res) => {
  res.send("ok ok ok ok ok");

  User.destroy({
    where: {
      id: 7,
    },
  })
    .then(() => console.log("deleted"))
    .catch((err) => console.log(err));

  // User.create({
  //   name,
  //   contact_email,
  // })
  //   .then((user) => res.redirect("/users"))
  //   .catch((err) => console.log(err));
});

// Delete User
router.get("/delete", (req, res) => {
  const data = {
    id: 6,
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

module.exports = router;
