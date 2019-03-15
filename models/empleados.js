const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const empleados = dataBase.define('empleados', {
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
    
    cargo: {
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

module.exports = empleados;