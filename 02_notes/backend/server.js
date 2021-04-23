const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// simple test route
app.get("/", (req, res) => {
  res.send("Pterrible Pterodactyls!");
});

app.use("/profile", require("./routes/notes"));

app.listen(PORT, (req, res) => {
  console.log(`Server launched on port: ${PORT}`);
});
