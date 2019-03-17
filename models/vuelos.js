const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const vuelos = dataBase.define('vuelos', {
    
    idVuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    estado: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    fecha: {
        type: sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = vuelos;