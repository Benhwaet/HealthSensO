const User = require('./User');
const Food = require('./Food');
const Journal = require('./Journal');
const Logbook = require('./Logbook');
const Painting = require('./Painting');

Journal.belongsTo(User, {
  foreignKey: "user_id", 
});

Logbook.belongsTo(User, {
  foreignKey: "user_id", 
});

module.exports = { User, Journal, Logbook }; 