const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const maletas = dataBase.define('maletas', {
    idPasaje: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    peso: {
        type: sequelize.FLOAT,
        allowNull: false,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = maletas;