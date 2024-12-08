const Sequelize = require('sequelize');

const sequelize = require('./database');

const Experience = sequelize.define('experience', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  company: Sequelize.STRING,
  dateFrom: Sequelize.STRING,
  dateTo: Sequelize.STRING,
  
  classMethods: {
    associate: (models) => {

      Education.hasMany(models.Project, {
          foreignKey: 'projectId'
      });
    }
  }

});

module.exports = Experience