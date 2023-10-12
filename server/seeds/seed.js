const sequelize = require('../config/connection');
const seedFood = require('./foodData');
const seedPaintings = require('./paintingData');
const seedUsers = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFood();

  await seedPaintings();

  await seedUsers();

  process.exit(0);
};

seedAll();
