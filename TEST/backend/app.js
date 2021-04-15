const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Once again...");
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: ${PORT}`);
});
