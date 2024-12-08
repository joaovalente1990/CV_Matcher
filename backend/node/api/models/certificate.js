const Sequelize = require('sequelize');

const sequelize = require('./database');

const Certificate = sequelize.define('certificate', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  instructor: Sequelize.STRING,
  platform: Sequelize.STRING,
  date: Sequelize.STRING,
  thesis: Sequelize.STRING,
  description: Sequelize.STRING,

});

module.exports = Certificate