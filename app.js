const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./config/database");
const PORT = process.env.PORT || 5000;
const app = express();

// Test DB Connection
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`ERROR: ${err}`));

app.get("/", (req, res) => {
  res.send("INDEX - Sequelize Cardio");
});

// Gig Routes
app.use("/gigs", require("./routes/gigs"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
