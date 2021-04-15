const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get Gig List
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.render("gigs", {
        gigs,
      });
    })
    .catch((err) => console.log(err))
);

// Display Add Gig Form
router.get("/add", (req, res) => res.render("add"));

// Add a gig
router.post("/add", (req, res) => {
  const data = {
    title: "Backend Dev",
    technologies: "Node,react,html,css,graphql",
    budget: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam vitae praesentium cupiditate nobis, debitis ipsa commodi exercitationem magni itaque, optio id quasi est aperiam voluptas quos quidem consectetur labore esse aliquam, sed laboriosam. Odio recusandae in tenetur atque doloremque!",
    contact_email: "user2@gmail.com",
  };
  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => res.redirect("/gigs"))
    .catch((err) => console.log(err));
});

module.exports = router;
