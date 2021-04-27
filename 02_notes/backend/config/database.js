const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize("notetest", "postgres", "girl4yeah", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
