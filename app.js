const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./config/database");
const PORT = process.env.PORT || 5000;

const app = express();

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse data
app.use(express.json());

// Set Static Assets
app.use(express.static(path.join(__dirname, "public")));

// Test DB Connection
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`ERROR: ${err}`));

// Index Route
app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

// Gig Routes
app.use("/gigs", require("./routes/gigs"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
