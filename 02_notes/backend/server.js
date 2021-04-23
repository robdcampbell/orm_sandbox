const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Pterrible Pterodactyls Batman!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server launched on port: ${PORT}`);
});
