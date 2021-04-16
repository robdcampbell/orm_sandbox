const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const User = require("./models/User");
const Note = require("./models/Notes");

const path = require("path");
const db = require("./config/database");

app.use(express.json());

// SimpleRoute Test
app.get("/", (req, res) => {
  res.send("PTERO-Ptest");
});

// Test DB Connection
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`ERROR: ${err}`));

// User Routes
app.use("/users", require("./routes/users"));

// Add a Note
// app.get("/note", (req, res) => {
//   const data = {
//     title: "4th ",
//     description: "inifity knives",
//   };
//   let { title, description } = data;

//   Note.create({
//     title,
//     description,
//   })
//     .then((user) => res.redirect("/"))
//     .catch((err) => console.log(err));
// });

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: ${PORT}`);
});

/*
API

GET  
GET 
POST
PUT
DELETE
DELETE
GET 
GET
*/
