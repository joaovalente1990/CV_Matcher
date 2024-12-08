const Sequelize = require('sequelize');

const sequelize = require('./database');

const Project = sequelize.define('project', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  description: Sequelize.STRING,
  
  classMethods: {
    associate: (models) => {

      Project.hasMany(models.Technology, {
          foreignKey: 'techId'
      });
    }
  }
  
});

module.exports = Project