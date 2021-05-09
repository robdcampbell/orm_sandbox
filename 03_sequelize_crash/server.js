const { sequelize } = require("./models");

async function main() {
  // created tables in our database based on our defined models
  await sequelize.sync();
}

main();
