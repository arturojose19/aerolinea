const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const mantenimiento = dataBase.define('mantenimiento', {
    codigoMantenimiento: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    tipoMantenimiento: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    duracion: {
        type: sequelize.TIME,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = mantenimiento;