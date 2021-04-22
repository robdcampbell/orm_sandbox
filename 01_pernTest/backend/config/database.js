// From https://sequelize.org/v4/ getting started
const Sequelize = require("sequelize");
const db = new Sequelize("test", "postgres", "girl4yeah", {
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

module.exports = db;
