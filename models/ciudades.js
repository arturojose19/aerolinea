const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const ciudades = dataBase.define('ciudades', {
    ciudad: {
        type: sequelize.STRING(255),
        allowNull: false,
        primaryKey:true,
        unique: true,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    
    pais: {
        type: sequelize.STRING(255),
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

module.exports = ciudades;