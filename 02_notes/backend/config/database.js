const { Sequelize } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize("notetest", "postgres", "girl4yeah", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

// Notes:

/*
pool:
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

*/
