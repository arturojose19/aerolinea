const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const avion = dataBase.define('avion', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isAlpha: true,
            isNumeric: true,
            notEmpty: true
        }
    },
    modelo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    },
    estado: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = avion;