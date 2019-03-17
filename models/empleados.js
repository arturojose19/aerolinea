const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const empleados = dataBase.define('empleados', {
    
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