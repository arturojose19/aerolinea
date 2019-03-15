const sequelize = require('sequelize');
const dataBase = require('../config/dataBase');

const tripulado = dataBase.define('tripulado', {
    idVuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    
    idEmpleado: {
        type: sequelize.INTEGER,
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

module.exports = tripulado;