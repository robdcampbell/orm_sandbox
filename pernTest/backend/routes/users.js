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

// Add a User
router.post("/", (req, res) => {
  const data = {
    name: req.body.name,
    contact_email: req.body.contact_email,
  };
  let { name, contact_email } = data;

  console.log(name, contact_email);

  User.create({
    name,
    contact_email,
  })
    .then((user) => res.redirect("/users"))
    .catch((err) => console.log(err));
});

// TEST****

/*router.get("/add", (req, res) => {
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
*/

// TEST**** DELETE Specific User test
router.delete("/:id", (req, res) => {
  //console.table(`****PTERODACTYL ${req.params.id}`);
  const id = req.params.id;
  console.log(id);
  User.destroy({
    where: {
      id,
    },
  })
    .then(() => console.log("deleted"))
    .catch((err) => console.log(err));
});

// Delete User Test
// router.get("/delete", (req, res) => {
//   const data = {
//     id: 6,
//     name: "Wayne Gretszy",
//     contact_email: "number99@gmail.com",
//   };
//   let { name, contact_email } = data;

//   User.create({
//     name,
//     contact_email,
//   })
//     .then((user) => res.redirect("/users"))
//     .catch((err) => console.log(err));
// });

module.exports = router;
