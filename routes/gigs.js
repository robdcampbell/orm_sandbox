const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// Get Gig List
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// Add a gig
router.get("/add", (req, res) => {
  const data = {
    title: "Simple Wordpress website",
    technologies: "wordpress,php,html,css",
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
