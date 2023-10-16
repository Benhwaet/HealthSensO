const User = require('./User');
const Food = require('./Food');
const Journal = require('./Journal');
const Logbook = require('./Logbook');
const Painting = require('./Painting');

Food.hasMany(Painting, {
  foreignKey: 'food_id',
});

Painting.belongsTo(Food, {
  foreignKey: 'food_id',
});

Journal.belongsTo(User, {
  foreignKey: "user_id", 
});

Logbook.belongsTo(User, {
  foreignKey: "user_id", 
});

module.exports = { User, Food, Painting };

//user has many journals & jounral belongs to user
// user has many logbooks & journal belongs to user  