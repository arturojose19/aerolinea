const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const pasajeros = dataBase.define('pasajeros', {
    documento: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        unique: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    millasAcumuladas: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = pasajeros;