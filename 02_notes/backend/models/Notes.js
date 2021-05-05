const Sequelize = require("sequelize");
const db = require("../config/database");

const Note = db.define("note", {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Note;
