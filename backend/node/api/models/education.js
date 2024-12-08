const Sequelize = require('sequelize');

const sequelize = require('./database');

const Education = sequelize.define('education', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  course: Sequelize.STRING,
  university: Sequelize.STRING,
  dateFrom: Sequelize.STRING,
  dateTo: Sequelize.STRING,
  thesis: Sequelize.STRING,
  description: Sequelize.STRING,
  
  classMethods: {
    associate: (models) => {

      Education.hasMany(models.Technology, {
          foreignKey: 'techId'
      });
    }
  }

});

module.exports = Education