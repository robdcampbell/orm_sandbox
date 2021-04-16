const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
