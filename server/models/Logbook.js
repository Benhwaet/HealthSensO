const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Logbook extends Model {}

Logbook.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    logbookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logbookBody: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Logbook',
  }
);

module.exports = Logbook;
