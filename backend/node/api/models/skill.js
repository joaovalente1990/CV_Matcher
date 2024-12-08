const Sequelize = require('sequelize');

const sequelize = require('./database');

const Skill = sequelize.define('skill', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  progLangs: Sequelize.STRING,
  frameworks: Sequelize.STRING,
  devops: Sequelize.STRING,
  dbs: Sequelize.STRING,
  versionSystems: Sequelize.STRING,
  methodologies: Sequelize.STRING

});

module.exports = Skill
