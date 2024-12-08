const Sequelize = require('sequelize');

const sequelize = require('./database');

const CV = sequelize.define('cv', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  inputFile: Sequelize.STRING,
  outputFile: Sequelize.STRING,
  photoFile: Sequelize.STRING,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  mobilePhone: Sequelize.STRING,
  email: Sequelize.STRING,
  github: Sequelize.STRING,
  
  classMethods: {
      associate: (models) => {

        CV.hasMany(models.Experience, {
            foreignKey: 'experienceId'
        });

        CV.hasMany(models.Education, {
            foreignKey: 'educationId'
        });

        CV.hasMany(models.Skill, {
          foreignKey: 'skillId'
        });

        CV.hasMany(models.Language, {
          foreignKey: 'languageId'
        });

        CV.hasMany(models.Certificate, {
          foreignKey: 'certificateId'
        });

      }
  }

});


module.exports = CV        