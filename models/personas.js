const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const personas = dataBase.define('personas', {
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
    
    nombre: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    apellido: {
        type: sequelize.STRING(255),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    sexo: {
        type: sequelize.STRING(1),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    fechaNacimiento: {
        type: sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = personas;