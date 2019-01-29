const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const aviones = dataBase.define('aviones', {
    Modelo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    ID: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    Estado: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = aviones;