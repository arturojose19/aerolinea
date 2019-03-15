const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const itinerarios = dataBase.define('itinerarios', {
    idItinerario: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    idVuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = itinerarios;