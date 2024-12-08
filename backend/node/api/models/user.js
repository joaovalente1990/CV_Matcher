const Sequelize = require('sequelize');

const sequelize = require('./database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    hashedPassword: Sequelize.STRING,
},
{
    classMethods: {
        associate: (models) => {
        User.hasMany(models.CV, {
            foreignKey: 'cvId'
        });
        }
    }
});

module.exports = User;
