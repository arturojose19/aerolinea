const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const pasajes = dataBase.define('pasajes', {
    idPasaje: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        unique: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    asiento: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    tipoAsiento: {
        type: sequelize.STRING(1),
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

module.exports = pasajes;