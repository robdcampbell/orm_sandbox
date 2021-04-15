const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    name: "Bathlazar the Pterodactyl III",
    message: "Once again...",
  });
});

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
