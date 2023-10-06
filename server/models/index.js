const User = require('./User');
const Food = require('./Food');
const Painting = require('./Painting');

Food.hasMany(Painting, {
  foreignKey: 'food_id',
});

Painting.belongsTo(Food, {
  foreignKey: 'food_id',
});

module.exports = { User, Food, Painting };
