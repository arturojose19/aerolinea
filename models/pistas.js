const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const pistas = dataBase.define('pistas', {
    
    numeroPista: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    distanciaPista: {
        type: sequelize.DOUBLE,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = pistas;