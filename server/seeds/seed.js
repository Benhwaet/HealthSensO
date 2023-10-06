const sequelize = require('../config/connection');
const seedFood = require('./foodData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFood();

  await seedPaintings();

  process.exit(0);
};

seedAll();
