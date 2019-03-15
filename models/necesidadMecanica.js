const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const necesidadMecanica = dataBase.define('necesidadMecanica', {
    ID: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    codigoMantenimiento: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    fecha: {
        type: sequelize.DATE,
        allowNull: false,
        primaryKey:true,
        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = necesidadMecanica;