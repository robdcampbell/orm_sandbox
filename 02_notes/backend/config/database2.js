const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize("notes2", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
