const express = require("express");
const app = express();
const PORT = 5000;
const db = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test Connection
(async () => {
  try {
    await db.authenticate();
    console.log("PTERO -Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

/*
db.authenticate()
  .then(console.log("Pterodacylsssss - its connected"))
  .catch((err) => console.log(err));
*/

// simple test route
app.get("/", (req, res) => {
  res.send("Pterrible Pterodactyls!");
});

app.use("/profile", require("./routes/notes"));

app.listen(PORT, (req, res) => {
  console.log(`Server launched on port: ${PORT}`);
});
