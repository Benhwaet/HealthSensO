const { Food } = require('../models');

const fooddata = [
  {
    name: 'Banana',
    calories: 105,
    fat: 0.4,
    carbohydrates: 27,
    protein: 1.3,
  },
  {
    name: 'Broccoli',
    calories: 55,
    fat: 0.6,
    carbohydrates: 11,
    protein: 4.2,
  },
  {
    name: 'Brisket',
    calories: 1312.3,
    fat: 82.9,
    carbohydrates: 0,
    protein: 132,
  },
  {
    name: 'Fries',
    calories: 317.7,
    fat: 14.8,
    carbohydrates: 41.1,
    protein: 3.4,
  },
];

const seedFood = () => Food.bulkCreate(fooddata);

module.exports = seedFood;
