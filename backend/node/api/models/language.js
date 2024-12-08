const Sequelize = require('sequelize');

const sequelize = require('./database');

const Language = sequelize.define('language', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING
});

module.exports = Language