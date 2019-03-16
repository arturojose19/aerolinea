const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const pasajeros = dataBase.define('pasajeros', {
    
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