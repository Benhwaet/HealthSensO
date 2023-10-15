const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {}

Journal.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    journalEntry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EntiryBody: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Journal',
  }
);

module.exports = Journal;