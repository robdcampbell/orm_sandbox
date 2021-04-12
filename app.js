const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// From https://sequelize.org/v4/ getting started
const Sequelize = require("sequelize");
const db = new Sequelize("codegig", "postgres", "girl4yeah", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

// Test DB
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`ERROR: ${err}`));

app.get("/", (req, res) => {
  res.send("INDEX - Sequelize Cardio");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
