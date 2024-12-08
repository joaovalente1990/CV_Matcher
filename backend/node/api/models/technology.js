const Sequelize = require('sequelize');

const sequelize = require('./database');

const Technology = sequelize.define('technology', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING
});

module.exports = Technology