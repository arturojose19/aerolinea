const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const aviones = dataBase.define('aviones', {
    
    ID: {
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
    
    Estado: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = aviones;