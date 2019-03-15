const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const tipoManifiesto = dataBase.define('tipoManifiesto', {

    codigoManifiesto: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },


    tipoManifiesto: {
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

module.exports = tipoManifiesto;